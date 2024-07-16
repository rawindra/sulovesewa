<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Slider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class SliderController extends Controller
{
    public function index()
    {
        return Inertia::render('Back/Slider/Index', [
            'sliders' => Slider::paginate(10)
        ]);
    }

    public function create()
    {
        return Inertia::render('Back/Slider/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'image' => 'required'
        ]);

        if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')->store('sliders', 'public');
        }

        Slider::create($validated);

        return redirect()->route('admin.sliders.index');
    }

    public function destroy(Slider $slider)
    {
        Storage::disk('public')->delete($slider->image);
        $slider->delete();

        return redirect()->back();
    }

    public function changeStatus(Slider $slider)
    {
        $slider->status = !$slider->status;
        $slider->save();

        return back();
    }
}
