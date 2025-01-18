<template>
    <div class="product-list-item">
      <!-- {{ data }} -->
        <div class="image_container">
          <!-- <img :src="data.media.images[0]" alt=""> -->
        </div>
        <div class="context">
          <div class="title">
            <h3>
              {{ data.title }}
              <small>({{ data.condition  }})</small>
            </h3>
            <strong class="condition">
              <!-- ({{ data.condition  }}) -->
                <!-- $950 -->

                {{  "$" + price_format(data.price.amount)}}
            </strong>
          </div>

          <div class="description">
            <p>
              {{ data.description }}
            </p>
          </div>

          <div class="seller">
            <div class="avatar"></div>
            <div class="context">
              <div class="left">
                {{ data.seller.name }}

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
                {{ data.seller.rating }} ⭐
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
  