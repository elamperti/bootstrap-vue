import Vue from 'vue'

<% if (!options.individualImports) { %>
  import BootstrapVue from 'bootstrap-vue'
  Vue.use(BootstrapVue)
<% } else { %>
  <% options.components.forEach(component => { %>
        import <%= component.replace(/-/g, "") %>Component from 'bootstrap-vue/es/components/<%=component%>/<%=component%>'
        Vue.component('b-<%=component%>', <%= component.replace(/-/g, "") %>Component)
  <% }) %>
  <% options.directives.forEach(directive => { %>
    import <%=directive%>Directive from 'bootstrap-vue/es/directives/<%=directive%>/<%=directive%>'
    Vue.component('b-<%=directive%>', <%=directive%>Directive)
  <% }) %>
<% } %>
