<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class RemoveAllergiesFromChildrenTable extends Migration
{
    public function up()
    {
        Schema::table('children', function (Blueprint $table) {
            $table->dropColumn('allergies');
        });
    }

    public function down()
    {
        Schema::table('children', function (Blueprint $table) {
            $table->string('allergies')->nullable();
        });
    }
}
