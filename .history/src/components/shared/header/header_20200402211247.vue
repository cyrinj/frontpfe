<template>
  <nav class="navbar is-fixed-top ss">
    <div class="navbar-menu ss">
      <div class="navbar-start">
        <a class="navbar-item kz" href="http://wantotrip.net/">
          Home
        </a>
        <a class="navbar-item kz" href="http://wantotrip.net/about.html">
         About us
        </a>
      </div>
      <div class="navbar-end">
        <div class="navbar-item x has-dropdown is-hoverable">
          <a class="kzspecial">
            <i class="fas fa-bell fa-lg"></i>
          </a>
          <!--  <a class="navbar-link kzspecial"></a> -->
          <div class="navbar-dropdown">
            <div class="sc">
              <a v-for="(obj, idx) in rows" :key="idx">
                <div class="hre">
                  <span class="titlestyle">
                    <strong>{{obj.title}}</strong>
                  </span>
                  <span class="contenustyle">: {{obj.contenu}}</span>
                  <br />
                  <span class="datestyle">{{obj.date}}</span>
                  <br />
                </div>
              </a>
            </div>
            <div>
              <router-link to="/notification">
                <a class="seeall">See all</a>
              </router-link>
            </div>
          </div>
        </div>
       
      
       
       
      
        <div class="navbar-item has-dropdown x is-hoverable kz1">
          <a class="kzspecial">
            <i class="fas fa-user-ninja fa-lg"></i>
          </a>
          <!--  <a class="navbar-link kzspecial"></a> -->
          <div class="navbar-dropdown">
            <a class="navbar-item arr changecolor">
              <router-link to="/editprofil">Edit Profil</router-link>
            </a>
            <a v-on:click="userLogout()" class="navbar-item arr changecolor">Logout</a>
          </div>
        </div>
         <div class="navbar-item has-dropdown x is-hoverable kz1">
          <a class="kzspecial">
            <i class="fas fa-user-ninja fa-lg"></i>
          </a>
          <!--  <a class="navbar-link kzspecial"></a> -->
          <div class="navbar-dropdown">
            <a class="navbar-item arr changecolor">
              <router-link to="/editprofil">Edit Profil</router-link>
            </a>
            <a v-on:click="userLogout()" class="navbar-item arr changecolor">Logout</a>
          </div>
        </div>
         <div class="navbar-item has-dropdown x is-hoverable kz1">
          <a class="kzspecial">
            <i class="fas fa-user-ninja fa-lg"></i>
          </a>
          <!--  <a class="navbar-link kzspecial"></a> -->
          <div class="navbar-dropdown">
            <a class="navbar-item arr changecolor">
              <router-link to="/editprofil">Edit Profil</router-link>
            </a>
            <a v-on:click="userLogout()" class="navbar-item arr changecolor">Logout</a>
          </div>
        </div>
         <div class="navbar-item has-dropdown x is-hoverable kz1">
          <a class="kzspecial">
            <i class="fas fa-user-ninja fa-lg"></i>
          </a>
          <!--  <a class="navbar-link kzspecial"></a> -->
          <div class="navbar-dropdown">
            <a class="navbar-item arr changecolor">
              <router-link to="/editprofil">Edit Profil</router-link>
            </a>
            <a v-on:click="userLogout()" class="navbar-item arr changecolor">Logout</a>
          </div>
        </div>
         <div class="navbar-item has-dropdown x is-hoverable kz1">
          <a class="kzspecial">
            <i class="fas fa-user-ninja fa-lg"></i>
          </a>
          <!--  <a class="navbar-link kzspecial"></a> -->
          <div class="navbar-dropdown">
            <a class="navbar-item arr changecolor">
              <router-link to="/editprofil">Edit Profil</router-link>
            </a>
            <a v-on:click="userLogout()" class="navbar-item arr changecolor">Logout</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import axios from "axios";
import UserMixin from "@/mixins/user.mixin.js";
//import { getnotifService } from "@/api/tripper.service.js";

export default {
  mixins: [UserMixin],

  data() {
    return {
        tablenotif:[],
      rows: [
        {
          title: "Trip wallet",
          contenu: "On vous informe que votre trip est accepté",
          date: "23-03-2020"
        },
        {
          title: "Trip negociation",
          contenu: "On vous informe que votre trip est à negocier",
          date: "30-03-2020"
        },
        {
          title: "Reclamation admin",
          contenu:
            "On vous informe que la séance de negociation du trip France proposé est pour ce lundi",
          date: "02-04-2020"
        },

        {
          title: "Trip wallet",
          contenu: "On vous informe que votre trip est accepté",
          date: "23-03-2020"
        },
        {
          title: "Trip negociation",
          contenu: "On vous informe que votre trip est à negocier",
          date: "30-03-2020"
        },
        {
          title: "Trip wallet",
          contenu: "On vous informe que votre trip est accepté",
          date: "23-03-2020"
        },
        {
          title: "Trip negociation",
          contenu: "On vous informe que votre trip est à negocier",
          date: "30-03-2020"
        },
        {
          title: "Trip wallet",
          contenu: "On vous informe que votre trip est accepté",
          date: "23-03-2020"
        },
        {
          title: "Trip negociation",
          contenu: "On vous informe que votre trip est à negocier",
          date: "30-03-2020"
        }
      ]
    };
  },

  methods: {
    userLogout() {
      const vuex = localStorage.getItem("token");
      if (vuex) {
        console.log("myuser", this.user);
        this.$store.dispatch("logout", this.user).then(data => {
          console.log("ok", data);
          localStorage.removeItem("token");
          this.$router.push("/");
        });
      }
    }
  },
   /* mounted() {
     getnotifService().then(data=>{
       this.tablenotif=data
     })
  }*/
 /* mounted() {
     return new Promise((resolve, reject) => {
      axios
        .get("http://localhost:3000/api/v2/tripper/profile")
        .then(data => {
          this.username = data.data.data[0].username;
           console.log("aaa",this.username)
        })
        .catch(error => {});
    });
  }*/
};
</script>
<style scoped>
.titlestyle {
  color: rgb(114, 108, 108);
}
.contenustyle {
  color: rgb(8, 0, 15);
  font-size: 12px;
}
.datestyle {
  color: rgb(8, 0, 15);

  margin-left: 220px;
  font-size: 10px;
}
.kzspecial {
  color: rgb(126, 91, 223);
}
.kzspecial:hover {
  color: rgb(56, 228, 113);
}
.kz {
  color: rgb(152, 146, 187);
  border-radius: 2em / 5em;
  font-size: 18px;
}
.kz:hover {
  color: rgb(56, 228, 113);
}
.box-shadow-y {
  box-shadow: 0px 2px 10px rgba(27, 134, 23, 0.25);
}
.icon {
  height: 30px;
  width: 30px;
  vertical-align: baseline;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
.t {
  color: rgb(56, 228, 113);
  margin-left: 15px;
}
.kz1 {
  color: black;
}
a.changecolor:hover {
  background-color: rgb(230, 241, 234);
}
a.vv:hover {
  background-color: rgb(56, 228, 113);
}
.navbar-dropdown {
  background-color: rgb(253, 247, 247);
  color: black;
  width: 300px;

}
a.f:hover {
  background-color: blue;
  color: blue;
}
a.changecolor {
  background-color: rgb(235, 226, 226);
}
ul.nn {
  margin-left: 5px;
}

.blanc {
  color: blue;
}
.ss {
  border-style: none none solid none;
  border-color: rgb(248, 239, 239);
  border-width: 0.1px;
  background-color: rgb(252, 247, 247);
  left: 315px;
  height: 83px;
}
a.arr {
  background-color: rgb(235, 226, 226);
  color: rgb(56, 228, 113);
}
nav {
  border-bottom: 1px solid rgba(0, 0, 0, 0.09);
}

.xxx {
  margin-left: 9px;
}

.x {
  margin-top: 40px;
  margin-right: 30px;
}

.hre {
  border-style: none none solid none;
  border-color: rgb(232, 232, 238);
  padding-right: 10px;
  padding-left: 10px;
}

.sc {
  overflow-y: scroll;
  scrollbar-color: rgb(208, 207, 228) rgb(226, 233, 226);
  height: 218px;
  scrollbar-width: thin;
}
.seeall{
    color: black;
    margin-left: 130px;
}
</style>