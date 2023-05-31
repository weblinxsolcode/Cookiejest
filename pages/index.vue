<script setup>

import Navbar from '../src/components/Navbar.vue';
import Banner from '../src/components/index/Banner.vue';
import Companies from '../src/components/index/Companies.vue';
import WorkWith from '../src/components/index/WorkWith.vue';
import WhatWeDo from '../src/components/index/WhatWeDo.vue';
import GetCaught from '../src/components/index/GetCaught.vue';
import Footer from '../src/components/index/Footer.vue';
import Retrieve from '../src/components/index/Retrieve.vue';

</script>
<template>
    <div id="wrapper">
        <header>
            <nav class="navbar navbar-expand-lg navbar-light ">
                <div class="container align-items-center">
                    <a class="navbar-brand" href="#">
                        <img src="/logo.png" class="img-fluid" alt="">
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link " aria-current="page" href="#">About Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" target="_blank" href="#/Dashboard">Pricing </a>
                            </li>

                        </ul>
                        <form class="d-flex ms-3">

                            <button class="btn px-4 py-2 btn__primary" type="submit">Login</button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
        <div>
            <section>
                <div class="container">
                    <div class="row mx-0 mt-5 pt-5 align-items-center gap-lg-0 gap-4">
                        <div class="col-lg-6">
                            <div class="row mx-0 justify-content-lg-center justify-content-center">
                                <div class="col-lg-10">
                                    <h1 class="outfit fw-700 display-4 text__black ">
                                        Backup and <br class="d-lg-block d-none" /> Embed <span class="text__primary"> Live
                                            Data
                                        </span> <br class="d-lg-block d-none" /> to de-risk your <br
                                            class="d-lg-block d-none" /> business.

                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="row mx-0 justify-content-lg-start justify-content-center">
                                <div class="col-lg-10">
                                    <input placeholder="Enter Your Name" type="text" class="form-control py-2 text__light">
                                    <button class="btn w-100 mt-4 btn__primary">Get Started</button>
                                </div>
                                <div class="row mx-0 mt-5 align-items-center gap-lg-0 gap-4">
                                    <div class="col-lg-4">

                                        <h1 class="h5 fw-800 text__primary2 text-capitalize">
                                            used by over 500 companies

                                        </h1>

                                    </div>
                                    <div class="col-lg-8">
                                        <div class="row mx-0">
                                            <div class="col-lg-3 col-6">
                                                <img src="/Luther.png" class="img-fluid" alt="">
                                            </div>
                                            <div class="col-lg-3 col-6">
                                                <img src="/mhh.png" class="img-fluid" alt="">
                                            </div>
                                            <div class="col-lg-3 col-6">
                                                <img src="/mint.png" class="img-fluid" alt="">
                                            </div>
                                            <div class="col-lg-3 col-6">
                                                <img src="/marlian.png" class="img-fluid" alt="">
                                            </div>
                                            <div class="col-lg-3 col-6">
                                                <img src="/habba.png" class="img-fluid" alt="">
                                            </div>
                                            <div class="col-lg-3 col-6">
                                                <img src="/ai.png" class="img-fluid" alt="">
                                            </div>
                                            <div class="col-lg-3 col-6">
                                                <img src="/jobgo.png" class="img-fluid" alt="">
                                            </div>
                                            <div class="col-lg-3 col-6">
                                                <img src="/nate.png" class="img-fluid" alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <div>
            <section>
                <div class="container mt-5 pt-5">
                    <h2 class="text__black outfit text-center fw-bold">
                        Retrieve, Filter and Backup Quickbooks data right now.
                    </h2>
                    <p class="text-muted  fw-600 text-center my-5 fs-5">
                        Your data is an asset you can’t afford to lose.
                    </p>

                    <div class="d-flex justify-content-center gap-5 flex-lg-row flex-column align-items-center">
                        <div>
                            <img src="/skrill.png" class="img-fluid" alt="">
                        </div>

                        <div class="d-flex flex-column gap-2">

                            <div class="d-flex align-items-center gap-3">
                                <img src="/checkcircle.png" alt="">
                                <p class="fs-4 fw-700 text__primary mb-0">
                                    Customers
                                </p>
                            </div>
                            <div class="d-flex align-items-center gap-3 mt-3">
                                <img src="/checkcircle.png" alt="">
                                <p class="fs-4 fw-700 text__primary mb-0">
                                    Invoices
                                </p>
                            </div>
                            <div class="d-flex align-items-center gap-3 mt-3">
                                <img src="/checkcircle.png" alt="">
                                <p class="fs-4 fw-700 text__primary mb-0">
                                    Credit Notes
                                </p>
                            </div>

                        </div>



                    </div>

                </div>

            </section>
        </div>
        <!-- <Companies/> -->
        <div>
            <section class="mt-5 pt-5">
                <div class="container">
                    <h1 class="text-center outfit text__black fw-700"> What We Do </h1>
                    <div class="row mx-0 mt-5 gap-lg-0 gap-4">
                        <div class="col-lg-4">
                            <div class="card__2 px-lg-4 py-lg-4 py-5 px-2">
                                <div
                                    class="d-flex gap-4 align-items-center flex-md-row flex-column text-lg-start text-center">
                                    <div>
                                        <img src="/symbol_1.png" alt="">
                                    </div>
                                    <div>
                                        <p class="outfit fs-5 fw-500 text__black mb-1">
                                            Schedule Backups
                                        </p>
                                        <p class="mb-0 text-black-50 outfit">
                                            Stay independent and <br class="d-lg-block d-none">
                                            avoid vendor data lock in

                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="card__2 px-lg-4 py-lg-4 py-5 px-2">
                                <div
                                    class="d-flex gap-4 align-items-center flex-md-row flex-column text-lg-start text-center">
                                    <div>
                                        <img src="/symbol_2.png" alt="">
                                    </div>
                                    <div>
                                        <p class="outfit fs-5 fw-500 text__black mb-1">
                                            Use Live Data in
                                            Spreadsheets
                                        </p>
                                        <p class="mb-0 text-black-50 outfit">
                                            Backup your cloud tools data

                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="card__2 px-lg-4 py-lg-4 py-5 px-2">
                                <div
                                    class="d-flex gap-4 align-items-center flex-md-row flex-column text-lg-start text-center">
                                    <div>
                                        <img src="/symbol_3.png" alt="">
                                    </div>
                                    <div>
                                        <p class="outfit fs-5 fw-500 text__black mb-1">
                                            Download Full Tables
                                        </p>
                                        <p class="mb-0 text-black-50 outfit">
                                            Provide Read-Only Data <br class="d-lg-block d-none" />
                                            Access to your team.

                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="row mx-0 mt-4 gap-lg-0 gap-4">
                        <div class="col-lg-4">
                            <div class="card__2 px-lg-4 py-lg-4 py-5 px-2">
                                <div
                                    class="d-flex gap-4 align-items-center flex-md-row flex-column text-lg-start text-center ">
                                    <div>
                                        <img src="/symbol_4.png" alt="">
                                    </div>
                                    <div>
                                        <p class="outfit fs-5 fw-500 text__black mb-1">
                                            Filter Large Files
                                        </p>
                                        <p class="mb-0 text-black-50 outfit">
                                            Embedd Live Data in
                                            <br class="d-lg-block d-none" />
                                            Spreadsheets

                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="card__2 px-lg-4 py-lg-4 py-5 px-2">
                                <div
                                    class="d-flex gap-4 align-items-center flex-md-row flex-column text-lg-start text-center">
                                    <div>
                                        <img src="/symbol_5.png" alt="">
                                    </div>
                                    <div>
                                        <p class="outfit fs-5 fw-500 text__black mb-1">
                                            Stay Vendor Independent
                                        </p>
                                        <p class="mb-0 text-black-50 outfit">
                                            Filter large files on s3 or <br class="d-lg-block d-none" />
                                            Dropdox into small data <br class="d-lg-block d-none" />
                                            that fits into your spreadsheet



                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="card__2 px-lg-4 py-lg-4 py-5 px-2">
                                <div
                                    class="d-flex gap-4 align-items-center flex-md-row flex-column text-lg-start text-center">
                                    <div>
                                        <img src="/symbol_6.png" alt="">
                                    </div>
                                    <div>
                                        <p class="outfit fs-5 fw-500 text__black mb-1">
                                            Serverless SQL
                                        </p>
                                        <p class="mb-0 text-black-50 outfit">
                                            Use SQL on live data <br class="d-lg-block d-none" />
                                            without a database

                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

            </section>


        </div>

        <div>
            <section>
                <div class="container mt-5 pt-5">
                    <h1 class="text-center text__black outfit fw-bold ">

                        Works With {{ MyText }}
                    </h1>
                    <div class="bg__card mb-5">
                        <div class="row mx-0 mt-5 py-5 align-items-center gap-lg-0 gap-4">
                            <div class="col-lg-4">
                                <div
                                    class="d-flex justify-content-center  align-items-center  gap-4 flex-md-row flex-column">
                                    <div>
                                        <img src="/laptop.png" class="img-fluid" alt="">
                                    </div>
                                    <div>
                                        <p class="outfit fw-400 text__black mb-0">
                                            SaaS Tools
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div
                                    class="d-flex  justify-content-center align-items-center  gap-4 flex-md-row flex-column">
                                    <div>
                                        <img src="/cloud.png" class="img-fluid" alt="">
                                    </div>
                                    <div>
                                        <p class="outfit fw-400 text__black mb-0">
                                            Cloud Storage
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div
                                    class="d-flex justify-content-center  align-items-center  gap-4 flex-md-row flex-column">
                                    <div>
                                        <img src="/bill.png" class="img-fluid" alt="">
                                    </div>
                                    <div>
                                        <p class="outfit fw-400 text__black mb-0">
                                            Bank Account <br class="d-lg-block d-none"> Transaction Data
                                        </p>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div :class="AnotherClass">
                            <div class="row mx-0  mt-3 pb-5 justify-content-center ">
                                <div class="col-lg-5 ">
                                    <div class="form-control d-flex">
                                        <input type="text" style="outline: none;" class="border-0 bg-transparent w-100 "
                                            placeholder="Search Connectors ... ">
                                        <v-icon name="fa-search" />

                                    </div>


                                </div>
                            </div>
                        </div>

                        <div
                            class="py-4 d-flex flex-wrap justify-content-lg-between gap-lg-0 gap-4 justify-content-center align-items-center px-5 mx-5">

                            <img src="/sage.png" alt="" class="img-fluid">
                            <img src="/coinbase.png" alt="" class="img-fluid">
                            <img src="/netletter.png" alt="" class="img-fluid">
                            <img src="/wise.png" alt="" class="img-fluid">
                            <img src="/erste.png" alt="" class="img-fluid">

                        </div>
                        <div
                            class="py-4 d-flex flex-wrap justify-content-lg-between justify-content-center gap-lg-0 gap-4 align-items-center px-5 mx-5">

                            <img src="/99.png" alt="" class="img-fluid">
                            <img src="/stripe2.png" alt="" class="img-fluid">
                            <img src="/stripe.png" alt="" class="img-fluid">
                            <img src="/quickbooks.png" alt="" class="img-fluid">
                            <img src="/stripe.png" alt="" class="img-fluid">

                        </div>

                    </div>
                </div>
            </section>
        </div>
        <div>
            <section class="my-5 py-lg-5 ">
                <div class="container">
                    <!-- <h1 class="fw-500 text__primary2 lh-base text-center">
                    Don’t Get Caught with your trousers down. <br class="d-lg-block d-none" />
                    De-Risk Your Business
                </h1> -->
                    <p class="text-muted fw-600 mt-5 text-center outfit fs-5 ">
                        Starts from Only $15 per Month
                    </p>
                    <div class="d-flex justify-content-center mt-5">
                        <div class="form-control py-1 ps-3 pe-1" style="width: max-content;">
                            <div
                                class="d-flex gap-lg-5 gap-3 justify-content-lg-start justify-content-center py-lg-0 py-3 align-items-center flex-wrap ">
                                <input type="text" style="outline: none;" placeholder="Enter Your Name"
                                    class="bg-transparent border-0 text-lg-start text-center" />
                                <button class="btn btn__primary px-5 py-2"> Get Started</button>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
        </div>
        <div>
            <footer class="py-5 bg-white mt-5">
                <div class="container">
                    <div class="row gap-lg-0 gap-4 mx-0">

                        <div class="col-lg-3">
                            <img src="/logo.png" class="img-fluid pointer" alt="">
                        </div>
                        <div class="col-lg-9">
                            <div class="row justify-content-lg-between mx-0 justify-content-center">
                                <div class="col-lg-3">
                                    <p class="fs-5 text-uppercase fw-bold outfit text__primary pointer">
                                        menu

                                    </p>

                                    <p class="epilogue pointer">
                                        About
                                    </p>
                                    <p class="epilogue pointer">
                                        Pricing
                                    </p>


                                </div>
                                <div class="col-lg-3">
                                    <p class="fs-5 text-uppercase fw-bold outfit text__primary pointer">
                                        Service

                                    </p>

                                    <p class="epilogue pointer">
                                        Data Backup
                                    </p>
                                    <p class="epilogue pointer">
                                        Data Management
                                    </p>


                                </div>

                                <div class="col-lg-3">
                                    <div class="d-flex gap-5 align-items-center">
                                        <img src="/facebook.png" class="img-fluid pointer" alt="">
                                        <img src="/twitter.png" class="img-fluid pointer" alt="">
                                        <img src="/instagram.png" class="img-fluid pointer" alt="">

                                    </div>

                                </div>


                            </div>
                        </div>

                    </div>
                    <hr class="my-5">

                    <div class="d-flex flex-wrap justify-content-lg-between justify-content-center gap-lg-0 gap-4">
                        <div class="outfit pointer">
                            Copyright © 2023 Cloudslurp. All Rights Reserved.
                        </div>
                        <div class="d-flex gap-4">
                            <div class="outfit pointer">
                                Terms of Use
                            </div>
                            <div class="outfit pointer">
                                Privacy Policy
                            </div>

                    </div>
                </div>
            </div>
        </footer>
    </div>



</div></template>
