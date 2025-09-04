<template>
  <nav>
    <div class="navbar">
      <img src="/assets/images/AskIslam.png" alt class="nav-brand">

      <div class="nav-btns">
        <router-link to="/public" class="nav-link"
                     active-class="active"
                     exact-active-class="exact-active">Home
        </router-link>
        <router-link to="/about" class="nav-link"
                     active-class="active"
                     exact-active-class="exact-active">About
        </router-link>
        <router-link to="/news" class="nav-link"
                     active-class="active"
                     exact-active-class="exact-active">News
        </router-link>
        <router-link to="/folders" class="nav-link"
                     active-class="active"
                     exact-active-class="exact-active">Folders
        </router-link>
        <router-link to="/contact" class="nav-link"
                     active-class="active"
                     exact-active-class="exact-active">Contact
        </router-link>

        <div class="nav-socials">
          <a href="#" class="youtube"><i class="fa fa-youtube"></i></a>
          <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
          <a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
        </div>

        <div class="button-container">
          <a class="nav-link" href="#" data-controller="login" id="signin">Sign In</a>
          <a class="nav-link" href="#" data-controller="register" id="signup">Sign Up</a>
        </div>
      </div>

      <div id="navbar-res">
        <!-- <button class="menu" id="open"><i class="fa fa-bars"></i></button> -->

        <div class="menu-btn" id="open">
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
        </div>
      </div>
    </div>

    <div id="side-nav">
      <div class="side-bar">
        <a class="nav-link" href="#" data-controller="welcome">Home</a>
        <a class="nav-link" href="#" data-controller="about">About</a>
        <a class="nav-link" href="#" data-controller="news">News</a>
        <a class="nav-link" href="#" data-controller="article">Folders</a>
        <a class="nav-link" href="#" data-controller="contact">Contact</a>
      </div>
    </div>

  </nav>
</template>

<script>


</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
}

/* - Navbar - */

nav {
  height: 70px;
  border-bottom: 1px solid #0dab1f;
  z-index: 997;
  transition: all 0.5s;
  background: #fff;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
  align-items: center;
  display: grid;
}

.navbar {
  height: fit-content;
  display: flex;
  padding: 10px;
  margin: 0 75px;
  background-color: #fff;
  justify-content: space-between;
  align-items: center;
}

#navbar-res {
  display: none;
}

.nav-btns {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.nav-btns a {
  margin: 0 5px;
  padding: 10px;
  text-decoration: none;

  font-weight: 600;
  border-radius: 3px;
  font-size: 16px;
  color: #4f5a62;
}

.nav-btns a:hover {
  color: #0dab1f;
}

.nav-link.active:not(.button-container #signin):not(.button-container #signup) {
  color: #0dab1f;
  background: none !important;
}


.nav-socials {
  margin: 0 15px;
  display: flex;
  align-items: center;
}

.nav-socials a {
  margin: 0;
  padding: 3px;
  color: grey;
}

.nav-brand {
  max-height: 40px;
  max-width: 100%;
  height: auto;
  vertical-align: middle;
  box-sizing: border-box;
}

#side-nav {
  display: none;
}

.menu {
  background: none;
  border: none;
  margin: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  font-weight: 600;
  border-radius: 3px;
  padding: 15px;
  font-size: 20px;
  color: #4f5a62;
}

.button-container {
  display: flex;
  /* overflow: hidden; */
}

.button-container a {
  text-align: center;
  text-decoration: none;
  color: white;
  font-weight: bold;
  padding: 10px;
  margin: 0;
  transition: background-color 0.3s;
  border-radius: 0;
}

.button-container #signin {
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
  background-color: #0dab1f;
  color: white !important;
}

.button-container #signup {
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
  border: 2px solid #0dab1f;
  background-color: white;
  color: #0dab1f;
}

.button-container #logout {
  border-radius: 7px;
  border: 1px solid #0dab1f;
  background-color: white;
  color: #0dab1f;
}
.button-container #logout:hover {
  border-radius: 7px;
  border: 1px solid #0dab1f;
  background-color: #0dab1f;
  color: #fff;
}

.menu-btn {
  display: inline-block;
  cursor: pointer;
}

.bar1, .bar2, .bar3 {
  width: 30px;
  height: 3px;
  background-color: #333;
  margin: 6px 0;
  transition: 0.4s;
}

.change .bar1 {
  transform: translate(0, 7px) rotate(-45deg);
}

.change .bar2 {opacity: 0;}

.change .bar3 {
  transform: translate(0, -11px) rotate(45deg);
}

@media screen and (max-width: 600px) {
  nav {
    height: 70px;
    border-bottom: 1px solid #0dab1f;
    background: #fff;
    left: 0;
    right: 0;
    top: 0;
    position: fixed;
    padding: 0 10px;
  }

  .navbar {
    margin: 0;
    padding: 0;
    display: flex;
    height: fit-content;
    z-index: 11;
    width: 100%;
  }

  #navbar-res {
    display: block;
  }

  .nav-btns {
    display: none;
  }

  #side-nav {
    display: block;
    width: 0;
    /* Set initial width to 0 */
    transition: width 0.1s ease-in-out;
    height: calc(100vh - 70px);
    background-color: rgba(0, 0, 0, 0.167);
    position: fixed;
    left: 0;
    top: 70px;
    overflow-y: scroll;
    color: white;
    z-index: 10;

  }

  .side-bar {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    height: calc(100vh - 70px);
    width: 0;
    /* Initial width when closed */
    transition: width 0.3s ease-in-out;
    justify-content: flex-start;
    align-items: flex-start;
  }

  /* Add a class for when the sidebar is open */
  #side-nav.open {
    width: 100%;
    /* Adjust the width as per your design */
  }

  #side-nav.open .side-bar {
    width: 60%;
  }

  .side-bar a {
    text-decoration: none;
    color: darkslategrey;
    font-weight: 600;
    font-size: 16px;
    padding: 10px;
    width: -webkit-fill-available;
  }

  .nav-socials {
    margin: 0 5px;
  }
}
</style>