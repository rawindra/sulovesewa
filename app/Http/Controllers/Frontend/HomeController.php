<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Cart;
use App\Models\Category;
use App\Models\Product;
use App\Models\Review;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function home() {
        $categories = Category::all();
        return Inertia::render('Front/Home', [
            'categories' => $categories,
            'products' => Product::paginate(10)
        ]);
    }

    public function product(Product $product) {
        return Inertia::render('Front/ProductShow', [
            'product' => $product->load('category', 'brand'),
        ]);
    }

    public function cart(Request $request)
    {
        
        $carts = Cart::where('user_id', auth()->user()->id)->where('product_id', $request->product_id)->first();
        if ($carts) {
            $cart = Cart::find($carts->id);
            $cart->user_id = $request->user()->id;
            $cart->product_id = $request->product_id;
            $cart->quantity = $cart->quantity + $request->quantity;
            $cart->save();
        } else {
            $cart = new Cart;
            $cart->user_id = $request->user()->id;
            $cart->product_id = $request->product_id;
            $cart->quantity = $request->quantity;
            $cart->save();
        }
        return redirect()->back();
    }

    public function review(Request $request)
    {
        $validated = request()->validate([
            'rating' => ['required', 'numeric','min:1','max:5'],
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
}
