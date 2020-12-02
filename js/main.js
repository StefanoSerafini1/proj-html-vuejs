var app = new Vue({
    el: '#app',
    data: {
        // Elenco recent post
        posts: [
            'The best protein shake',
            'Ultimate cardio workout',
            'New juices available now',
            'Tips to find training partners',
            '20 best healthy recipies'
        ],
        links: [
            'Home',
            'Service',
            'About',
            'Videos',
            'Blog'
        ],
        mailList:[],
        newMail:''
      },

      methods :{
        //funzione per aggiunta nuova attivita
        aggMail() {
         if (this.newMail.trim() != ''){
             this.mailList.push( this.newMail );
             console.log(this.mailList);
             this.newMail= '';
          }
        },
      }

});
