<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
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
}
