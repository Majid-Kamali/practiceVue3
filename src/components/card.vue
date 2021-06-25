<template>
 
     
        <div class="w-full sm:w-1/2 md:w-1/3 flex flex-col p-3">
        <div
            class="
            bg-white
            rounded-lg
            shadow-lg
            overflow-hidden
            flex-1 flex flex-col
            "
        >
            <div
            class="bg-cover h-48"
            style="
                background-image: url(https://images.unsplash.com/photo-1497398276231-94ff5dc90217?w=900);
            "
            ></div>
            <div class="p-4 flex-1 flex flex-col" style="">
            <h4 class="mb-4 text-2xl">
                <router-link :to="{name:'userId',params:{id:user.id}}">{{user.name}}</router-link>
            </h4>
            <div class="mb-4 text-grey-darker text-sm flex-1">
                <p>{{user.email}} </p>
                <p>
               {{user.address.city}} / {{user.address.street}} /{{user.address.suite}}
                </p>
                <p>
               name : {{user.company.name}} -
               catchPhrase : {{user.company.catchPhrase}} -
               bs : {{user.company.bs}} -
               website : {{user.website}}
              
                </p>
            </div>
            <a
                href="#"
                class="
                border-t border-grey-light
                pt-2
                text-xs text-grey
                hover:text-red
                uppercase
                no-underline
                tracking-wide
                "
                style=""
                >{{user.phone}}</a>
              
            </div>
        </div>
        </div>

  
</template>

<script>
export default {
    props:{user:Object},
    setup(){
        
    }
};
</script>

<style lang="scss" scoped>

/* demo shizzle only */
body {
  background: #eee;
  max-width: 900px;
  margin: 30px auto;
  padding: 20px;
/*   outline: 1px solid #ccc; */
}

/* Still use global css (not utility css) for base typography etc? */
p {
  margin-bottom: 0.8em;
}

</style>