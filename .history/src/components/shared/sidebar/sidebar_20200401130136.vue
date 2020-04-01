<template>
  <div class="sidebar is-fixed xx4">
    <div class="cnt">
      <img src="@/assets/logo.png" width="270" height="200" />
    </div>

    <div class="DivWithScroll">

       <div v-if="user.role=='blogger'">
        <button class="dropdown-btn" @click="zz()">
        <span class="icon e3">
          <i class="fas fa-star"></i>
        </span>Programs
        <i class="fa fa-caret-down si"></i>
      </button>
      <div class="dropdown-container">
        <router-link to="/seealltrip">
          <button class="dgh">
            <span class="icon has-text-success e3">
              <i class="fas fa-poll-h"></i>
            </span>Programs
          </button>
        </router-link>

        <router-link to="/status_demande">
          <button class="dgh">
            <span class="icon has-text-success e3">
              <i class="fas fa-history"></i>
            </span>Reservations
          </button>
        </router-link>
      </div>
      </div>
      <button class="dropdown-btn" @click="zz()">
        <span class="icon e3">
          <i class="fas fa-lightbulb"></i>
        </span>Ideas
        <i class="fa fa-caret-down si"></i>
      </button>
      <div class="dropdown-container">
        <router-link to="/model">
          <button class="dgh">
            <span class="icon has-text-success e3">
              <i class="fas fa-journal-whills e3"></i>
            </span>Trip form
          </button>
        </router-link>
        <router-link to="/formactivity">
          <button class="dgh">
            <span class="icon has-text-success e3">
              <i class="fas fa-bullseye e3"></i>
            </span>Hosting activity
          </button>
        </router-link>
      </div>
      <button class="dropdown-btn" @click="zz()">
        <span class="icon e3">
          <i class="fas fa-comment-dollar"></i>
        </span>Invesstissment
        <i class="fa fa-caret-down si"></i>
      </button>
      <div class="dropdown-container">
        <button class="dropdown-btn" @click="zz()">
          <span class="icon e3">
            <i class="fas fa-compass"></i>
          </span>Status
          <i class="fa fa-caret-down si"></i>
        </button>
        <div class="dropdown-container">
          <router-link to="/status">
            <button class="dgh">
              <span class="icon has-text-success e3">
                <i class="fas fa-list"></i>
              </span>List
            </button>
          </router-link>
          <router-link to="/grid">
            <button class="dgh">
              <span class="icon has-text-success e3">
                <i class="fas fa-table"></i>
              </span>Grid
            </button>
          </router-link>
        </div>
      </div>

      <button class="dropdown-btn" @click="zz()">
        <span class="icon e3">
          <i class="fas fa-cog"></i>
        </span>Settings
        <i class="fa fa-caret-down si"></i>
      </button>
      <div class="dropdown-container">
        <router-link to="/editprofil">
          <button class="dgh">
            <span class="icon has-text-success e3">
              <i class="fas fa-user-tie"></i>
            </span>Edit Profil
          </button>
        </router-link>

        <router-link to="/changepassword_in">
          <button class="dgh">
            <span class="icon has-text-success e3">
              <i class="fas fa-key"></i>
            </span>Edit password
          </button>
        </router-link>
      </div>
      <!------------------------->
     
      <!------------------------->
      <button class="dropdown-btn" @click="zz()">
        <span class="icon e3">
          <i class="fas fa-rss"></i>
        </span>News
        <i class="fa fa-caret-down si"></i>
      </button>
      <div class="dropdown-container">
        <router-link to="/chat">
          <button class="dgh">
            <span class="icon has-text-success e3">
              <i class="fas fa-comments"></i>
            </span>Chat
          </button>
        </router-link>
        <router-link to="/wallet">
          <button class="dgh">
            <span class="icon has-text-success e3">
              <i class="fas fa-coins"></i>
            </span>Wallet
          </button>
        </router-link>
        <router-link to="/notification">
          <button class="dgh">
            <span class="icon has-text-success e3">
              <i class="fas fa-bell"></i>
            </span>Notifications
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import UserMixin from "@/mixins/user.mixin.js";

export default {
  mixins: [UserMixin],

  name: "sidebar",

  methods: {
    nav() {
      this.$router.push("ha");
    },
    zz() {
      var dropdown = document.getElementsByClassName("dropdown-btn");
      var i;

      for (i = 0; i < dropdown.length; i++) {
        dropdown[i].addEventListener("click", function() {
          //this.classList.toggle("active");
          var dropdownContent = this.nextElementSibling;
          if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
          } else {
            dropdownContent.style.display = "block";
          }
        });
      }
    }
  }
};
</script>
<style scoped>
.e1 {
  display: inline-block;
  margin-right: 10px;
  margin-left: 20px;
  color: brown;
}
.e2 {
  display: inline-block;
}
.full-height {
  height: 100%;
}
.si {
  width: 15px;
  margin-top: 4px;
}
.e3 {
  margin-right: 10px;
  display: inline-block;
}

ul.nn {
  margin-left: 5px;
}

ul.nnn {
  margin-top: 2px;
}
.pp {
  text-decoration: underline;
}
.px-1,
.p-1 {
  padding-right: 0.1rem;
  padding-left: 0.1rem;
}

.py-1,
.p-1 {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}

.box-shadow-x {
  box-shadow: 4px 2px 10px rgb(199, 209, 198);
}

.k {
  color: white;
}
.j {
  height: 580px;
}

.m {
  border: 1px solid rgb(199, 209, 198);
  border-radius: 12px;
  position: absolute;

  z-index: 10;
  background-color: white;
  height: 512px;
  border-style: hidden;
  width: 205px;
}

.cnt {
  background-color: rgb(0, 0, 0);
  border-width: 0.01em;
  border-style: none none solid none;
  border-color: rgb(79, 74, 74);
}
.xx4 {
  width: 315px;
  background-color: rgb(0, 0, 0);
  height: 650px;
}

a.changecolor:hover {
  color: white;
  background-color: rgb(34, 32, 32);
}
.test {
  position: absolute;
  top: 0px;
}
hr {
  position: absolute;
  left: 38px;
  top: 40px;
  width: 1px;
  height: 128px;
  background-color: #b1acac;
}
.x {
  position: absolute;
  left: 40px;
  top: 40px;
  width: 1px;
  height: 128px;
}
.y {
  position: absolute;
  left: 38px;
  top: 265px;
  width: 1px;
  height: 128px;
}
.z {
  position: absolute;
  left: 40px;
  top: 265px;
  width: 1px;
  height: 128px;
}

.cc {
  position: absolute;
  top: 0px;
  left: 250px;
  background-color: #b1acac;
  height: 400px;
}

/* Style the sidenav links and the dropdown button */
.dropdown-btn {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 20px;
  color: rgb(243, 239, 239);
  display: block;
  border: none;
  background: none;
  width: 100%;
  text-align: left;
  cursor: pointer;
  outline: none;
}
.dgh {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 20px;
  color: rgb(168, 175, 171);
  display: block;
  border: none;
  background: none;
  width: 100%;
  text-align: left;
  cursor: pointer;
  outline: none;
}

.dgh:hover {
  background-color: rgb(238, 245, 240);
  color: rgb(56, 228, 113);
}
/* On mouse-over */
.dropdown-btn:hover {
  color: #f1f1f1;
  background-color: rgb(80, 87, 84);
}

/* Main content */
.main {
  margin-left: 200px; /* Same as the width of the sidenav */
  font-size: 20px; /* Increased text to enable scrolling */
  padding: 0px 10px;
}

/* Add an active class to the active dropdown button */
.active {
  background-color: green;
  color: white;
}

/* Dropdown container (hidden by default). Optional: add a lighter background color and some left padding to change the design of the dropdown content */
.dropdown-container {
  display: none;
  padding-left: 8px;
}

/* Optional: Style the caret down icon */
.fa-caret-down {
  float: right;
  padding-right: 8px;
}
.DivToScroll {
  background-color: #f5f5f5;
  border: 1px solid #dddddd;
  border-radius: 4px 0 4px 0;
  color: #3b3c3e;
  font-size: 12px;
  font-weight: bold;
  left: -1px;
  padding: 10px 7px 5px;
}

.DivWithScroll {
  overflow-y: scroll;
  scrollbar-width: thin;
  height: 555px;
  scrollbar-color: rebeccapurple;
}

.firstligne {
  width: 260px;
  height: 1px;
  margin-top: 55px;
}
</style>