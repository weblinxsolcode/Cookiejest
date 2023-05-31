<template>
    <div>
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
    </div>
</template>