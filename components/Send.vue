<template>
  <svg id="send" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 69.47 69.47">
    <g id="Layer_2" data-name="Layer 2">
      <g id="Layer_1-2" data-name="Layer 1">
        <polygon
          class="cls-star"
          :fill="starState"
          points="34.73 69.47 24.56 59.3 10.17 59.3 10.17 44.91 0 34.73 10.17 24.56 10.17 10.17 24.56 10.17 34.73 0 44.91 10.17 59.3 10.17 59.3 24.56 69.47 34.73 59.3 44.91 59.3 59.3 44.91 59.3 34.73 69.47"
        />
        <text class="cls-sendTextStar" :fill="'green'" text-anchor="middle" x="50%" y="56%" >{{sendText}}</text>
      </g>
    </g>
  </svg>
</template>


<script>
export default {
    props: ['sendText','starState']
};
</script>

<style>


  .cls-star {
    fill: #f58e58;
  }
  .cls-sendTextStar {
    font-size: 16.79px;
    fill: #fff;
    font-family: HelveticaNeue-Bold, Helvetica Neue;
    font-weight: 700;
    letter-spacing: 0.01em;
  }

  #send {
  width: 70px;
}
      </style>