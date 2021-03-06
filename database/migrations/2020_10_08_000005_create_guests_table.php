<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGuestsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('guests', function (Blueprint $table) {
            $table->id();
            $table->foreignId('schedule_id')->constrained('schedules')->onDelete('cascade');
            $table->string('name', 255);
            $table->string('category', 255)->nullable()->default('');
            $table->mediumText('description')->nullable();
            $table->string('social_fb', 255)->nullable();
            $table->string('social_tw', 255)->nullable();
            $table->string('social_ig', 255)->nullable();
            $table->string('social_web', 255)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('guests');
    }
}
