<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Child;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'parent_name' => 'required|string|max:255',
            'parent_email' => 'required|string|email|max:255|unique:users,email',
            'parent_password' => ['required', 'confirmed', Rules\Password::defaults()],
            'child_name' => 'required|string|max:255',
            'child_age' => 'required|integer',
        ]);

        $user = User::create([
            'name' => $request->parent_name,
            'email' => $request->parent_email,
            'password' => Hash::make($request->parent_password),
        ]);

        Child::create([
            'parent_id' => $user->id,
            'name' => $request->child_name,
            'age' => $request->child_age,
        ]);

        event(new Registered($user));

        Auth::login($user);

        return redirect()->route('dashboard');
    }
}