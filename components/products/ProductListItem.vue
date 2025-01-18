<template>
    <div class="product-list-item">
      <!-- {{ data }} -->
        <div class="image_container" 
          v-if="data.media.images"
          :style="{ 'backgroundImage': `url(${data.media.images[0]})` }"
          ></div>
        <div class="context">
          <div class="title">
            <h3>
              {{ data.title }}
              <small>({{ data.condition  }})</small>
            </h3>
            <strong class="condition">
                {{  "$" + price_format(data.price.amount)}}
            </strong>
          </div>

          <div class="description">
            <p>
              {{ data.description }}
            </p>
          </div>

          <div class="seller">
            <div class="avatar" :style="{ 'backgroundImage': `url(${data.seller.avatar})` }"></div>
            <div class="context">
              <div class="left">
                {{ data.seller?.name }}

                <div class="verified"  v-if="data.seller.verified">
                  <svg id="icon-shield" viewBox="0 0 20 20">
                    <path fill="currentColor" d="M17.604 3.332c-4.614 0.668-5.529-0.499-7.604-2.332-2.075 1.833-2.99 3-7.604 2.332-2.459 12.248 7.604 15.668 7.604 15.668s10.063-3.42 7.604-15.668zM12.473 13.309l-2.473-1.3-2.472 1.3 0.472-2.753-2-1.95 2.764-0.401 1.236-2.505 1.236 2.505 2.764 0.401-2 1.949 0.473 2.754z"></path>
                  </svg>
                </div>

                <!-- <b :class="{'verified': data.seller.verified}">
                  [  {{  data.seller.verified ? "Verified" : "Unverified" }} ]
                </b> -->
              </div>
              <div class="right">

                <div class="ratings">
                  {{ data.seller.rating }}
                  <svg id="icon-star-full" width="20" height="20" viewBox="0 0 19 19">
                    <path fill="currentColor" d="M17.19 4.155c-1.672-1.534-4.383-1.534-6.055 0l-1.135 1.042-1.136-1.042c-1.672-1.534-4.382-1.534-6.054 0-1.881 1.727-1.881 4.52 0 6.246l7.19 6.599 7.19-6.599c1.88-1.726 1.88-4.52 0-6.246z"></path>
                  </svg>
                </div>
                
                <button class="add_to_list">
                  <span class="add">
                    <svg id="icon-add-to-list"  width="20" height="20" viewBox="0 0 20 20">
                      <path d="M19.4 9h-3.4v-3.4c0-0.6-0.4-0.6-1-0.6s-1 0-1 0.6v3.4h-3.4c-0.6 0-0.6 0.4-0.6 1s0 1 0.6 1h3.4v3.4c0 0.6 0.4 0.6 1 0.6s1 0 1-0.6v-3.4h3.4c0.6 0 0.6-0.4 0.6-1s0-1-0.6-1zM7.4 9h-6.8c-0.6 0-0.6 0.4-0.6 1s0 1 0.6 1h6.8c0.6 0 0.6-0.4 0.6-1s0-1-0.6-1zM7.4 14h-6.8c-0.6 0-0.6 0.4-0.6 1s0 1 0.6 1h6.8c0.6 0 0.6-0.4 0.6-1s0-1-0.6-1zM7.4 4h-6.8c-0.6 0-0.6 0.4-0.6 1s0 1 0.6 1h6.8c0.6 0 0.6-0.4 0.6-1s0-1-0.6-1z"></path>
                    </svg>
                  </span>
                  
                </button>
              </div>

              <!-- seller name,verification and ratings -->
            </div>
          </div>
          
          <!-- {{ formattedPrice }} -->
        </div>
    </div>
  </template>
  
<script setup lang="ts">
  // Props
  defineProps<{
    data: any;
  }>();

  function price_format (amount: number) : string {
    if (isNaN(amount)) {
      console.error('Invalid input: Amount must be a number');
      return '0.00'; // Return a default value when input is invalid
    }

    return amount.toFixed(2)
  }

</script>
  