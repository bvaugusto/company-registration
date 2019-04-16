<template>
  <div>
    <div>
      <div >
        <div>
          <div >
            <div>
              <div
                v-for="n in 9"
                :key="n"
                >
                <div class="d-flex">
                  <img
                    :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                    :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                    aspect-ratio="1"
                    class="grey lighten-2"
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({

    })
  }
</script>


