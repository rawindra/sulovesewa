<?php

use App\Http\Controllers\Backend\BrandController;
use App\Http\Controllers\Backend\CategoryController;
use App\Http\Controllers\Backend\OrderController;
use App\Http\Controllers\Backend\ProductController;
use App\Http\Controllers\Backend\SliderController;
use App\Http\Controllers\Frontend\HomeController;
use App\Http\Controllers\GoogleLoginController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [HomeController::class, 'home'])->name('home');
Route::get('/product/show/{product}', [HomeController::class, 'product'])->name('view.product');
Route::post('/cart/add', [HomeController::class, 'cart'])->middleware('auth')->name('cart.store');
Route::delete('/cart-items/remove/{itemsId}', [HomeController::class, 'cartItemRemove'])->middleware('auth')->name('cart.remove');
Route::post('/place/order', [HomeController::class, 'order'])->middleware('auth')->name('place.order');
Route::post('submit-review', [HomeController::class, 'storeReview'])->name('reviews.submit');
Route::get('/orders', [HomeController::class, 'orderList'])->middleware('auth')->name('orders');

Route::get('/admin/dashboard', function () {
    return Inertia::render('Back/Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->prefix('admin')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware('auth')->prefix('admin')->as('admin.')->group(function () {
    Route::resource('brands', BrandController::class);
    Route::resource('categories', CategoryController::class);
    Route::resource('products', ProductController::class);
    Route::resource('sliders', SliderController::class);
    Route::post('sliders/{slider}/changeStatus', [SliderController::class, 'changeStatus'])->name('sliders.changeStatus');
    Route::resource('orders', OrderController::class);
    Route::post('orders/{order}/changeStatus', [OrderController::class, 'changeStatus'])->name('orders.changeStatus');
});

Route::get('/login/google', [GoogleLoginController::class, 'redirectToGoogle'])->name('auth.google');
Route::get('/login/google/callback', [GoogleLoginController::class, 'handleGoogleCallback']);

require __DIR__ . '/auth.php';

