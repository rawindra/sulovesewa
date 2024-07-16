<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Cart;
use App\Models\Category;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Product;
use Illuminate\Support\Facades\Auth;
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
        ]);
    }

    public function product(Product $product)
    {
        return Inertia::render("Front/ProductShow", [
            "product" => $product->load("category", "brand"),
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
        return redirect()->back();
    }

    public function order()
    {
        $carts = Cart::where("user_id", auth()->user()->id)->get();
        $order = new Order();
        $order->order_date = now();
        $order->order_status = 'pending';
        $order->payment_status = 'unpaid';
        $order->customer_name = auth()->user()->name;
        $order->customer_contact_number = '9089161393';
        $order->customer_address = '';
        $order->order_note = '';
        $order->save();
        foreach ($carts as $cart) {
            $orderItems = new OrderItem;
            $orderItems->order_id = $order->id;
            $orderItems->product_id = $cart->product_id;
            $orderItems->quantity = $cart->quantity;
            $orderItems->price = $cart->product->price * $cart->quantity;
            $orderItems->save();
        }
        Cart::where("user_id", auth()->user()->id)->delete();

        return redirect()->back();
    }
    
}
