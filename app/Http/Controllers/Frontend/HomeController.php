<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Cart;
use App\Models\Category;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Product;
use Illuminate\Support\Facades\Auth;
use App\Models\Review;
use App\Models\Slider;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use Ramsey\Uuid\Codec\OrderedTimeCodec;

class HomeController extends Controller
{
    public function home()
    {
        $categories = Category::whereNull("parent_id")->with("children")->get();

        $cartItems = [];
        if (Auth::check()) {
            $cartItems = Cart::with(["product"])
                ->where("user_id", auth()->user()->id)
                ->get();
        }

        return Inertia::render("Front/Home", [
            "categories" => $categories,
            "products" => Product::paginate(10),
            "cartItems" => $cartItems,
            'sliders' => Slider::where('status', 1)->get(),
        ]);
    }

    public function product(Product $product)
    {
        $reviews = $product->reviews;

        return Inertia::render("Front/ProductShow", [
            "product" => $product->load("category", "brand"),
            'reviews' => $reviews->load('user'),
            'avgRating' => ceil($reviews->avg('rating')),
            'totalRating' => $reviews->count('rating'),
        ]);
    }

    public function cart(Request $request)
    {
        $carts = Cart::where("user_id", auth()->user()->id)
            ->where("product_id", $request->product_id)
            ->first();
        if ($carts) {
            $cart = Cart::find($carts->id);
            $cart->user_id = $request->user()->id;
            $cart->product_id = $request->product_id;
            $cart->quantity = $cart->quantity + $request->quantity;
            $cart->save();
        } else {
            $cart = new Cart();
            $cart->user_id = $request->user()->id;
            $cart->product_id = $request->product_id;
            $cart->quantity = $request->quantity;
            $cart->save();
        }
        return Inertia::location('/');
    }

    public function order(Request $request)
    {
        $order = new Order();
        $order->user_id = auth()->user()->id;
        $order->order_date = now();
        $order->order_status = 'pending';
        $order->payment_status = 'unpaid';
        $order->customer_name = auth()->user()->name;
        $order->customer_contact_number = '';
        $order->customer_address = '';
        $order->order_note = '';
        $order->save();
        foreach ($request->cartItems as $cart) {
            $orderItems = new OrderItem;
            $orderItems->order_id = $order->id;
            $orderItems->product_id = $cart['product_id'];
            $orderItems->quantity = $cart['quantity'];
            $orderItems->price = $cart['product']['price'] * $cart['quantity'];
            $orderItems->save();
        }
        Cart::where("user_id", auth()->user()->id)->delete();

    }


    public function storeReview(Request $request)
    {
        $validated = request()->validate([
            'rating' => ['required', 'numeric', 'min:1', 'max:5'],
            'review' => ['required', 'string', 'max:255'],
            'product' => ['required', Rule::exists(Product::class, 'id')]
        ]);
        $review = new Review();
        $review->rating = $validated['rating'];
        $review->review = $validated['review'];
        $review->user_id = auth()->user()->id;
        $review->product_id = $validated['product'];
        $review->save();

        return redirect()->back();
    }

    public function cartItemRemove($itemsId)
    {
        Cart::find($itemsId)->delete();
    }
}
