<script setup>

</script>
<template>
    <div>
        <div class="row mx-0  align-items-start position-relative">
            <div class="col-lg-2 bg-white py-lg-0 py-4 sticky">
                <div class="container">
                    <img src="/logo2.png" alt="" class="img-fluid py-4">
                    <div
                        class="bg__white d-flex gap-2 justify-content-lg-start py-3 justify-content-between py-2 px-3 rounded ">
                        <input type="text" class="bg-transparent border-0 " style="outline:none"
                            placeholder="Search Connectors ...">
                        <v-icon name="fa-search"></v-icon>
                    </div>


                    <div class="pt-3">
                        <div class="d-flex justify-content-center ">
                            <button class="btn btn__primary inter fw-500 rounded-0 w-100 py-1">
                                Available
                            </button>
                            <button class="btn bg__ltgray text-white fw-500 inter rounded-0 w-100 py-1">
                                Active
                            </button>
                        </div>
                    </div>
                    <div class=" pt-3">
                        <div class="p-3 rounded-3" style="border: 1px solid #ccc;">
                            <div class="d-flex justify-content-center ">
                                <img src="/pipedrive.png" alt="" class="img-fluid">
                            </div>
                            <div class="d-flex justify-content-center ">
                                <button class="btn btn__primary w-100">
                                    Connect
                                </button>
                            </div>
                            <div class="d-flex justify-content-center mt-5">
                                <p class="fs-5 outfit fw-600 mb-0">
                                    CloudSlurp Limited
                                </p>
                            </div>
                            <div class="d-flex justify-content-center  mt-2">
                                <button class="btn btn-danger w-100">
                                    Disconnect
                                </button>
                            </div>

                        </div>

                    </div>
                    <div class="pt-3">
                        <div class="p-3 rounded-3" style="border: 1px solid #ccc;">
                            <div class="d-flex justify-content-center ">
                                <img src="/coinbase2.png" alt="" class="img-fluid">
                            </div>
                            <div class="d-flex justify-content-center mt-3 ">
                                <button class="btn btn__primary w-100">
                                    Connect
                                </button>
                            </div>


                        </div>

                    </div>
                </div>



            </div>

            <div class="col-lg-10 bg__blue ">
                <div class="container">
                    <div
                        class="d-flex justify-content-lg-between justify-content-center gap-lg-0 gap-4 flex-lg-row flex-column-reverse mt-4 flex-wrap">
                        <h5 class="public fw-700  ">
                            Data Management

                        </h5>
                        <div class="d-flex gap-4 align-items-center">
                            <img src="/Avatar.png" alt="" class="img-fluid">
                            <h6 class="text-black-50 mb-0 pointer">
                                james@cloudslurp.com
                            </h6>
                            <a href="#" class="text__black fw-500 text-decoration-none">Trailing</a>
                            <a href="/" class="text-primary fw-500 text-decoration-none">Logout</a>
                        </div>
                    </div>
                    <div class="mt-5">
                        <div class="d-flex justify-content-lg-end justify-content-center">
                            <div class="bg-white d-flex gap-5 flex-wrap py-2 px-4 rounded">
                                <select name="" id="" class="bg-transparent border-0 pe-4" style="outline: none;">
                                    <option value="0" selected>Automated Test Board - do not delete</option>
                                    <option value="1">Automated Test Board - do not delete</option>
                                    <option value="2">Automated Test Board - do not delete</option>
                                </select>

                                <div class="text-black-50">
                                    <v-icon name="fa-cog" />
                                </div>
                                <div class="d-flex gap-2 align-items-center text-black-50">
                                    <v-icon name="fa-plus" />
                                    <p class="mb-0">
                                        Create Board
                                    </p>


                                </div>

                                <!-- <div class="text-black-50">
                                    <v-icon name="fa-trash" />
                                </div> -->
                                <div>
                                    <p class="text-black-50 fw-600 mb-0 public">
                                        Invite Team
                                    </p>
                                </div>


                            </div>
                        </div>

                    </div>
                    <div class="mt-5">
                        <div class="w-100 bg__primary p-3">
                            <div class="row mx-0 gap-lg-0 gap-4">
                                <div class="col-lg-6">
                                    <h1 class="fw-700 text-white display-6 text-lg-start text-center">
                                        Upgrade Benefits
                                    </h1>
                                    <h4 class="fw-700 text-white pt-4 text-lg-start text-center">
                                        Activate Backups <br class=""> Download Data <br class="" />
                                        Multiple Data Boards <br class="" />
                                        1 TB Storage<br class="" />
                                    </h4>
                                </div>
                                <div class="col-lg-5">
                                    <h1 class="fw-700 text-center text-white display-3">
                                        $0.50 Per Day
                                    </h1>
                                    <p class="text-white fw-500 text-center">
                                        Billed Monthly. Cancel Anytime.
                                    </p>
                                    <div class="d-flex form-control justify-content-between py-2 text-black-50 fw-500">
                                        <div class="d-flex gap-3 align-items-center">
                                            <v-icon name="fa-credit-card"></v-icon>
                                            <input type="text" class="bg-transparent border-0" style="outline:none"
                                                placeholder="4242 4242 4242">
                                        </div>
                                        <div class="d-flex gap-3 align-items-center">
                                            <input type="text" class="bg-transparent border-0"
                                                style="outline:none;width:80px;" placeholder="MM / YY">
                                            <input type="text" class="bg-transparent border-0"
                                                style="outline:none;width:50px;" placeholder="ZIP">
                                        </div>

                                    </div>
                                    <button class="btn btn-success w-100 py-2 mt-3"
                                        style="background-color: #5DBD5B !important;">
                                        Subscribe
                                    </button>
                                    <div class="d-flex justify-content-lg-end justify-content-center mt-3">
                                        <div class="btn btn-light">
                                            <small class="text__black outfit">Powered by</small>
                                            <img src="/stripe__text.png" class="ms-2" alt="">
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>

                    <div class="mt-5">
                        <div class="bg-white rounded p-3">
                            <div class="d-flex justify-content-between flex-wrap gap-lg-0 gap-4">
                                <div class="bg__white rounded px-2 py-1">
                                    <select name="" id="" class="bg__white pe-5 py-1 rounded border-0 "
                                        style="outline: none;">
                                        <option value="" selected> Backup Period </option>
                                        <option value=""> Backup Period </option>
                                        <option value=""> Backup Period </option>
                                        <option value=""> Backup Period </option>
                                    </select>
                                </div>
                                <div class="d-flex gap-2 flex-wrap ">
                                    <div
                                        class="bg__white rounded px-2 py-1 text-black-50 d-flex gap-3 align-items-center mb-lg-0 mb-3">
                                        <v-icon name="fa-search">
                                        </v-icon>
                                        <input type="text" name="" class="bg-transparent border-0" style="outline: none;"
                                            placeholder="Search Table Names" id="">
                                    </div>
                                    <div class="bg__white rounded px-2 py-1 mb-lg-0 mb-3">
                                        <select name="" id="" class="bg__white pe-5 py-1 rounded border-0 "
                                            style="outline: none;">
                                            <option value="" selected> Filter By Connection </option>
                                            <option value=""> Backup Period </option>
                                            <option value=""> Backup Period </option>
                                            <option value=""> Backup Period </option>
                                        </select>
                                    </div>
                                    <div class="">
                                        <button class="btn btn__primary px-4 py-2 inter">
                                            Download (0 Selected)
                                        </button>
                                    </div>
                                </div>

                            </div>
                            <div class="mt-3 table-responsive">
                                <table class="table border-0" style="box-shadow: none;outline:none;">
                                    <tr class="bg__white align-middle  py-2 "
                                        style="box-shadow: none;outline:none;border-bottom:10px solid #fff;white-space: nowrap;">
                                        <td class="border-0 ps-4">
                                            <input type="checkbox" name="" class="form-check" id="">
                                        </td>
                                        <td class="border-0">
                                            <img src="/dropbox.png" alt="">
                                        </td>
                                        <td class="border-0">
                                            <div class="d-flex flex-column gap-0">
                                                <p class="fs-5 text-black-50 fw-600 mb-0">
                                                    Yellow_tripdata_2022
                                                </p>
                                                <p class="small mb-0" style="color:#ccc">
                                                    chrisbrown@cloudslurp.com

                                                </p>
                                            </div>
                                        </td>
                                        <td class="border-0">
                                            <div class="d-flex gap-2 text-black-50 outfit fw-600 align-items-center pointer ">

                                                <v-icon name="fa-eye"></v-icon>

                                                <p class="mb-0 ">
                                                    View Data
                                                </p>
                                            </div>
                                        </td>
                                        <td class="border-0">
                                            <div class="d-flex gap-2 text-black-50 outfit fw-600 align-items-center pointer ">

                                                <v-icon name="hi-solid-refresh"></v-icon>

                                                <p class="mb-0 ">
                                                    Refresh
                                                </p>
                                                <span class="text__black outfit fw-600">
                                                    (12 Mins Ago)
                                                </span>
                                            </div>

                                        </td>
                                        <td class="border-0">
                                            <div class="d-flex gap-2 text-black-50 outfit fw-600 align-items-center pointer">

                                                <v-icon name="bi-arrows-fullscreen"></v-icon>

                                                <p class="mb-0 ">
                                                    Full Screen
                                                </p>
                                            </div>
                                        </td>
                                        <td class="border-0">
                                            <div class="d-flex gap-2 text-black-50 outfit fw-600 align-items-center pointer ">

                                                <v-icon name="md-backup-sharp"></v-icon>

                                                <p class="mb-0 ">
                                                    Backup
                                                </p>
                                            </div>
                                        </td>
                                        <td class="border-0">
                                            <div class="d-flex gap-2 text-black-50 outfit fw-600 align-items-center  pointer">

                                                <v-icon name="bi-download"></v-icon>

                                                <p class="mb-0 ">
                                                    CSV
                                                </p>
                                            </div>
                                        </td>
                                        <td class="border-0">
                                            <div class="d-flex gap-2 text-black-50 outfit fw-600 align-items-center pointer ">

                                                <v-icon name="bi-file-earmark-spreadsheet"></v-icon>

                                                <p class="mb-0 ">
                                                    GSHEET
                                                </p>
                                            </div>
                                        </td>
                                        <td class="border-0">
                                            <div class="d-flex gap-2 text-black-50 outfit fw-600 align-items-center pointer">

                                                <v-icon name="vi-file-type-excel2"></v-icon>

                                                <p class="mb-0 ">
                                                    EXCEL
                                                </p>
                                            </div>
                                        </td>
                                        <td class="border-0">
                                            <div class="d-flex gap-2 text-black-50 outfit fw-600 align-items-center pointer">

                                                <v-icon name="bi-code-slash"></v-icon>

                                                <p class="mb-0 ">
                                                    CODE
                                                </p>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="bg__white align-middle  py-2 "
                                        style="box-shadow: none;outline:none;border-bottom:10px solid #fff;white-space: nowrap;">
                                        <td class="border-0 ps-4">
                                            <input type="checkbox" name="" class="form-check" id="">
                                        </td>
                                        <td class="border-0">
                                            <img src="/dropbox.png" alt="">
                                        </td>
                                        <td class="border-0">
                                            <div class="d-flex flex-column gap-0">
                                                <p class="fs-5 text-black-50 fw-600 mb-0">
                                                    Yellow_tripdata_2022
                                                </p>
                                                <p class="small mb-0" style="color:#ccc">
                                                    chrisbrown@cloudslurp.com

                                                </p>
                                            </div>
                                        </td>
                                        <td class="border-0">
                                            <div class="d-flex gap-2 text-black-50 outfit fw-600 align-items-center pointer ">

                                                <v-icon name="fa-eye"></v-icon>

                                                <p class="mb-0 ">
                                                    View Data
                                                </p>
                                            </div>
                                        </td>
                                        <td class="border-0">
                                            <div class="d-flex gap-2 text-black-50 outfit fw-600 align-items-center pointer ">

                                                <v-icon name="hi-solid-refresh"></v-icon>

                                                <p class="mb-0 ">
                                                    Refresh
                                                </p>
                                                <span class="text__black outfit fw-600">
                                                    (12 Mins Ago)
                                                </span>
                                            </div>

                                        </td>
                                        <td class="border-0">
                                            <div class="d-flex gap-2 text-black-50 outfit fw-600 align-items-center pointer">

                                                <v-icon name="bi-arrows-fullscreen"></v-icon>

                                                <p class="mb-0 ">
                                                    Full Screen
                                                </p>
                                            </div>
                                        </td>
                                        <td class="border-0">
                                            <div class="d-flex gap-2 text-black-50 outfit fw-600 align-items-center pointer ">

                                                <v-icon name="md-backup-sharp"></v-icon>

                                                <p class="mb-0 ">
                                                    Backup
                                                </p>
                                            </div>
                                        </td>
                                        <td class="border-0">
                                            <div class="d-flex gap-2 text-black-50 outfit fw-600 align-items-center  pointer">

                                                <v-icon name="bi-download"></v-icon>

                                                <p class="mb-0 ">
                                                    CSV
                                                </p>
                                            </div>
                                        </td>
                                        <td class="border-0">
                                            <div class="d-flex gap-2 text-black-50 outfit fw-600 align-items-center pointer ">

                                                <v-icon name="bi-file-earmark-spreadsheet"></v-icon>

                                                <p class="mb-0 ">
                                                    GSHEET
                                                </p>
                                            </div>
                                        </td>
                                        <td class="border-0">
                                            <div class="d-flex gap-2 text-black-50 outfit fw-600 align-items-center pointer">

                                                <v-icon name="vi-file-type-excel2"></v-icon>

                                                <p class="mb-0 ">
                                                    EXCEL
                                                </p>
                                            </div>
                                        </td>
                                        <td class="border-0">
                                            <div class="d-flex gap-2 text-black-50 outfit fw-600 align-items-center pointer">

                                                <v-icon name="bi-code-slash"></v-icon>

                                                <p class="mb-0 ">
                                                    CODE
                                                </p>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="bg__white align-middle  py-2 "
                                        style="box-shadow: none;outline:none;border-bottom:10px solid #fff;white-space: nowrap;">
                                        <td class="border-0 ps-4">
                                            <input type="checkbox" name="" class="form-check" id="">
                                        </td>
                                        <td class="border-0">
                                            <img src="/dropbox.png" alt="">
                                        </td>
                                        <td class="border-0">
                                            <div class="d-flex flex-column gap-0">
                                                <p class="fs-5 text-black-50 fw-600 mb-0">
                                                    Yellow_tripdata_2022
                                                </p>
                                                <p class="small mb-0" style="color:#ccc">
                                                    chrisbrown@cloudslurp.com

                                                </p>
                                            </div>
                                        </td>
                                        <td class="border-0">
                                            <div class="d-flex gap-2 text-black-50 outfit fw-600 align-items-center pointer ">

                                                <v-icon name="fa-eye"></v-icon>

                                                <p class="mb-0 ">
                                                    View Data
                                                </p>
                                            </div>
                                        </td>
                                        <td class="border-0">
                                            <div class="d-flex gap-2 text-black-50 outfit fw-600 align-items-center pointer ">

                                                <v-icon name="hi-solid-refresh"></v-icon>

                                                <p class="mb-0 ">
                                                    Refresh
                                                </p>
                                                <span class="text__black outfit fw-600">
                                                    (12 Mins Ago)
                                                </span>
                                            </div>

                                        </td>
                                        <td class="border-0">
                                            <div class="d-flex gap-2 text-black-50 outfit fw-600 align-items-center pointer">

                                                <v-icon name="bi-arrows-fullscreen"></v-icon>

                                                <p class="mb-0 ">
                                                    Full Screen
                                                </p>
                                            </div>
                                        </td>
                                        <td class="border-0">
                                            <div class="d-flex gap-2 text-black-50 outfit fw-600 align-items-center pointer ">

                                                <v-icon name="md-backup-sharp"></v-icon>

                                                <p class="mb-0 ">
                                                    Backup
                                                </p>
                                            </div>
                                        </td>
                                        <td class="border-0">
                                            <div class="d-flex gap-2 text-black-50 outfit fw-600 align-items-center  pointer">

                                                <v-icon name="bi-download"></v-icon>

                                                <p class="mb-0 ">
                                                    CSV
                                                </p>
                                            </div>
                                        </td>
                                        <td class="border-0">
                                            <div class="d-flex gap-2 text-black-50 outfit fw-600 align-items-center pointer ">

                                                <v-icon name="bi-file-earmark-spreadsheet"></v-icon>

                                                <p class="mb-0 ">
                                                    GSHEET
                                                </p>
                                            </div>
                                        </td>
                                        <td class="border-0">
                                            <div class="d-flex gap-2 text-black-50 outfit fw-600 align-items-center pointer">

                                                <v-icon name="vi-file-type-excel2"></v-icon>

                                                <p class="mb-0 ">
                                                    EXCEL
                                                </p>
                                            </div>
                                        </td>
                                        <td class="border-0">
                                            <div class="d-flex gap-2 text-black-50 outfit fw-600 align-items-center pointer">

                                                <v-icon name="bi-code-slash"></v-icon>

                                                <p class="mb-0 ">
                                                    CODE
                                                </p>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="bg__white align-middle  py-2 "
                                        style="box-shadow: none;outline:none;border-bottom:10px solid #fff;white-space: nowrap;">
                                        <td class="border-0 ps-4">
                                            <input type="checkbox" name="" class="form-check" id="">
                                        </td>
                                        <td class="border-0">
                                            <img src="/dropbox.png" alt="">
                                        </td>
                                        <td class="border-0">
                                            <div class="d-flex flex-column gap-0">
                                                <p class="fs-5 text-black-50 fw-600 mb-0">
                                                    Yellow_tripdata_2022
                                                </p>
                                                <p class="small mb-0" style="color:#ccc">
                                                    chrisbrown@cloudslurp.com

                                                </p>
                                            </div>
                                        </td>
                                        <td class="border-0">
                                            <div class="d-flex gap-2 text-black-50 outfit fw-600 align-items-center pointer ">

                                                <v-icon name="fa-eye"></v-icon>

                                                <p class="mb-0 ">
                                                    View Data
                                                </p>
                                            </div>
                                        </td>
                                        <td class="border-0">
                                            <div class="d-flex gap-2 text-black-50 outfit fw-600 align-items-center pointer ">

                                                <v-icon name="hi-solid-refresh"></v-icon>

                                                <p class="mb-0 ">
                                                    Refresh
                                                </p>
                                                <span class="text__black outfit fw-600">
                                                    (12 Mins Ago)
                                                </span>
                                            </div>

                                        </td>
                                        <td class="border-0">
                                            <div class="d-flex gap-2 text-black-50 outfit fw-600 align-items-center pointer">

                                                <v-icon name="bi-arrows-fullscreen"></v-icon>

                                                <p class="mb-0 ">
                                                    Full Screen
                                                </p>
                                            </div>
                                        </td>
                                        <td class="border-0">
                                            <div class="d-flex gap-2 text-black-50 outfit fw-600 align-items-center pointer ">

                                                <v-icon name="md-backup-sharp"></v-icon>

                                                <p class="mb-0 ">
                                                    Backup
                                                </p>
                                            </div>
                                        </td>
                                        <td class="border-0">
                                            <div class="d-flex gap-2 text-black-50 outfit fw-600 align-items-center  pointer">

                                                <v-icon name="bi-download"></v-icon>

                                                <p class="mb-0 ">
                                                    CSV
                                                </p>
                                            </div>
                                        </td>
                                        <td class="border-0">
                                            <div class="d-flex gap-2 text-black-50 outfit fw-600 align-items-center pointer ">

                                                <v-icon name="bi-file-earmark-spreadsheet"></v-icon>

                                                <p class="mb-0 ">
                                                    GSHEET
                                                </p>
                                            </div>
                                        </td>
                                        <td class="border-0">
                                            <div class="d-flex gap-2 text-black-50 outfit fw-600 align-items-center pointer">

                                                <v-icon name="vi-file-type-excel2"></v-icon>

                                                <p class="mb-0 ">
                                                    EXCEL
                                                </p>
                                            </div>
                                        </td>
                                        <td class="border-0">
                                            <div class="d-flex gap-2 text-black-50 outfit fw-600 align-items-center pointer">

                                                <v-icon name="bi-code-slash"></v-icon>

                                                <p class="mb-0 ">
                                                    CODE
                                                </p>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="bg__white align-middle  py-2 "
                                        style="box-shadow: none;outline:none;border-bottom:10px solid #fff;white-space: nowrap;">
                                        <td class="border-0 ps-4">
                                            <input type="checkbox" name="" class="form-check" id="">
                                        </td>
                                        <td class="border-0">
                                            <img src="/dropbox.png" alt="">
                                        </td>
                                        <td class="border-0">
                                            <div class="d-flex flex-column gap-0">
                                                <p class="fs-5 text-black-50 fw-600 mb-0">
                                                    Yellow_tripdata_2022
                                                </p>
                                                <p class="small mb-0" style="color:#ccc">
                                                    chrisbrown@cloudslurp.com

                                                </p>
                                            </div>
                                        </td>
                                        <td class="border-0">
                                            <div class="d-flex gap-2 text-black-50 outfit fw-600 align-items-center pointer ">

                                                <v-icon name="fa-eye"></v-icon>

                                                <p class="mb-0 ">
                                                    View Data
                                                </p>
                                            </div>
                                        </td>
                                        <td class="border-0">
                                            <div class="d-flex gap-2 text-black-50 outfit fw-600 align-items-center pointer ">

                                                <v-icon name="hi-solid-refresh"></v-icon>

                                                <p class="mb-0 ">
                                                    Refresh
                                                </p>
                                                <span class="text__black outfit fw-600">
                                                    (12 Mins Ago)
                                                </span>
                                            </div>

                                        </td>
                                        <td class="border-0">
                                            <div class="d-flex gap-2 text-black-50 outfit fw-600 align-items-center pointer">

                                                <v-icon name="bi-arrows-fullscreen"></v-icon>

                                                <p class="mb-0 ">
                                                    Full Screen
                                                </p>
                                            </div>
                                        </td>
                                        <td class="border-0">
                                            <div class="d-flex gap-2 text-black-50 outfit fw-600 align-items-center pointer ">

                                                <v-icon name="md-backup-sharp"></v-icon>

                                                <p class="mb-0 ">
                                                    Backup
                                                </p>
                                            </div>
                                        </td>
                                        <td class="border-0">
                                            <div class="d-flex gap-2 text-black-50 outfit fw-600 align-items-center  pointer">

                                                <v-icon name="bi-download"></v-icon>

                                                <p class="mb-0 ">
                                                    CSV
                                                </p>
                                            </div>
                                        </td>
                                        <td class="border-0">
                                            <div class="d-flex gap-2 text-black-50 outfit fw-600 align-items-center pointer ">

                                                <v-icon name="bi-file-earmark-spreadsheet"></v-icon>

                                                <p class="mb-0 ">
                                                    GSHEET
                                                </p>
                                            </div>
                                        </td>
                                        <td class="border-0">
                                            <div class="d-flex gap-2 text-black-50 outfit fw-600 align-items-center pointer">

                                                <v-icon name="vi-file-type-excel2"></v-icon>

                                                <p class="mb-0 ">
                                                    EXCEL
                                                </p>
                                            </div>
                                        </td>
                                        <td class="border-0">
                                            <div class="d-flex gap-2 text-black-50 outfit fw-600 align-items-center pointer">

                                                <v-icon name="bi-code-slash"></v-icon>

                                                <p class="mb-0 ">
                                                    CODE
                                                </p>
                                            </div>
                                        </td>
                                    </tr>
                                 
                                </table>
                            </div>
                        </div>
                        <div class="mt-5 mb-5">
                            <hr>
                            <div class="d-flex justify-content-between flex-wrap gap-lg-0 gap-3">
                                <div>
                                    <p class="mb-0 inter">Copyright © 2023 Cloudslurp. All Rights Reserved.</p>
                                </div>
                                <div class="d-flex gap-5 align-items-center">
                                    <p class="mb-0 inter pointer">Terms Of Use</p>
                                    <p class="mb-0 inter pointer">Privacy Policy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </div>
</template>
