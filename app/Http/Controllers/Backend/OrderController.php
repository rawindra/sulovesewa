<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Order;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OrderController extends Controller
{

    public function index()
    {
        return Inertia::render('Back/Order/Index', [
            'orders' => Order::paginate(10)
        ]);
    }

    public function show(Order $order)
    {
        return Inertia::render('Back/Order/Show', [
            'orderItems' => $order->orderItems->load('product')
        ]);
    }

    public function destroy(Order $order)
    {
        $order->delete();

        return back();
    }

    public function changeStatus(Order $order)
    {
        $order->order_status = match ($order->order_status) {
            'pending' => 'purchased',
            'purchased' => 'cancelled',
            'cancelled' => 'pending',
        };

        $order->save();

        return back();
    }
}
