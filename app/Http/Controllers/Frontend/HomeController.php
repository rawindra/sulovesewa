<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Product;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function home()
    {
        $categories = Category::whereNull('parent_id')
            ->with('children')
            ->get();

        return Inertia::render('Front/Home', [
            'categories' => $categories,
            'products' => Product::paginate(10)
        ]);
    }

    public function product(Product $product)
    {
        return Inertia::render('Front/ProductShow', [
            'product' => $product->load('category', 'brand'),
        ]);
    }
}
