<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Brand;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BrandController extends Controller
{
    public function index()
    {
        return Inertia::render('Back/Brand/Index', [
            'brands' => Brand::paginate(10)
        ]);
    }

    public function create()
    {
        return Inertia::render('Back/Brand/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
        ]);

        Brand::create($validated);

        return redirect()->route('admin.brands.index');
    }

    public function edit(Brand $brand)
    {
        return Inertia::render('Back/Brand/Edit', [
            'brand' => $brand
        ]);
    }

    public function update(Request $request, Brand $brand)
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
        ]);

        $brand->update($validated);

        return redirect()->route('admin.brands.index');
    }

    public function destroy(Brand $brand)
    {
        $brand->delete();
        return redirect()->route('admin.brands.index');
    }
}
