<template>
  <div id="app">
    <div id="view" :class="[{'collapsed' : collapsed}]">
      <!-- <router-view/> -->
    </div>
    <sidebar-menu
      class="sidebar  bg-primary"
      :menu="menu"
      :collapsed="collapsed"
      @item-click="onItemClick"
      @collapse="onCollapse"
    />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      menu: [
        {
          header: true,
          // title: "Getting Started" <i class="fa-thin fa-paper-plane"></i>
        },
        {
          href: "/customer",
          title: "Customer",
          icon: "fa fa-list-ul"
        },
        {
          href: "/employee",
          title: "Employee",
          icon: "fa fa-list-ul"
        },
        {
          href: "/admin",
          title: "Admin",
          icon: "fa fa-list-ul"
        },
        ,
        {
          href: "/driver",
          title: "Driver",
          icon: "fa fa-list-ul"
        },
        {
          href: "/delivery",
          title: "Delivery",
          icon: "fa fa-list-ul"
        },
        {
          href: "/commission",
          title: "Commission",
          icon: "fa fa-list-ul"
        },
        
        {
          href: "/remuneration",
          title: "Remuneration",
          icon: "fa fa-list-ul"
        }
        ,
        
        {
          href: "/supplier",
          title: "Supplier",
          icon: "fa fa-list-ul"
        }
        ,
        
        {
          href: "/product-sold",
          title: "Product Sold",
          icon: "fa fa-list-ul"
        }
        ,
        
        {
          href: "/food-item",
          title: "Food Item",
          icon: "fa fa-list-ul"
        },
        {
          href: "/food-type",
          title: "Food Type",
          icon: "fa fa-list-ul"
        }
        

      ],
      collapsed: true
    };
  },
  methods: {
    onItemClick(e, i) {
      console.log("onItemClick");
    },
    onCollapse(c) {
      console.log("onCollapse");
      this.collapsed = c;
    }
  }
};
</script>

<style>
#view {
  padding-left: 350px;
  z-index: 2;
}
#view.collapsed {
  padding-left: 50px;
}

.sidebar.v-sidebar-menu .vsm-arrow:after {
  content: "\f105";
  font-family: "FontAwesome";
}
.sidebar.v-sidebar-menu .collapse-btn:after {
  content: "\f07e";
  font-family: "FontAwesome";
}
.sidebar {
  margin-top:70px;
}
</style>