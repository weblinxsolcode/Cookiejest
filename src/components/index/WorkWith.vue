<template>
    <div>
        <section>
            <div class="container mt-5 pt-5">
                <h1 class="text-center text__black outfit fw-bold ">

                    Works With {{ MyText }}
                </h1>
                <div class="bg__card mb-5">
                    <div class="row mx-0 mt-5 py-5 align-items-center gap-lg-0 gap-4">
                        <div class="col-lg-4">
                            <div class="d-flex justify-content-center  align-items-center  gap-4 flex-md-row flex-column">
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
                            <div class="d-flex  justify-content-center align-items-center  gap-4 flex-md-row flex-column">
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
                            <div class="d-flex justify-content-center  align-items-center  gap-4 flex-md-row flex-column">
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

                    <div class="py-4 d-flex flex-wrap justify-content-lg-between gap-lg-0 gap-4 justify-content-center align-items-center px-5 mx-5">

                        <img src="/sage.png" alt="" class="img-fluid">
                        <img src="/coinbase.png" alt="" class="img-fluid">
                        <img src="/netletter.png" alt="" class="img-fluid">
                        <img src="/wise.png" alt="" class="img-fluid">
                        <img src="/erste.png" alt="" class="img-fluid">

                    </div>
                    <div class="py-4 d-flex flex-wrap justify-content-lg-between justify-content-center gap-lg-0 gap-4 align-items-center px-5 mx-5">

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
</template>
<script>
export default {
    props: {
        AnotherClass: String,
        MyText: String,
    }
}
</script>