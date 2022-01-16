<link rel="stylesheet" href="../css/menu.css">

{{-- <div class="c-menu">
    <a href="{{Route("home")}}" class="c-menu__link">Home</a>
</div> --}}

<nav class="c-navbar navbar navbar-dark bg-dark navbar-expand-lg">
    {{-- <div class="c-navbar__container">
        <img class="navbar-brand c-navbar__img" src="../imgs/logo/drake.png" width="60" height="60" alt="">
        <span class="c-navbar__brand">Sydoria</span>
    </div> --}}
        <a href="{{Route("home")}}" class="nav-item nav-link c-menu__link">Home</a>
        <a href="{{Route("movies")}}" class="nav-item nav-link c-menu__link">Movies</a>
        <a href="{{Route("home")}}" class="nav-item nav-link c-menu__link">TV Shows</a>
</nav>
