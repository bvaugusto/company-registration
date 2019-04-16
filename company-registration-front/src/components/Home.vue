<template>
  <container fluid ma-0 pa-0 fill-width>
    <layout>
      <flex xs12>
        <card>
          <container grid-list-sm fluid>
            <layout row wrap>
              <flex
                for="n in 9"
                :key="n"
                xs4
                d-flex
              >
                <card flat tile class="d-flex">
                  <img
                    :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                    :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                    aspect-ratio="1"
                    class="grey lighten-2"
                  >
                    <layout
                      slot="placeholder"
                      fill-height
                      align-center
                      justify-center
                      ma-0
                    >
                      <progress-circular indeterminate color="grey lighten-5"></progress-circular>
                    </layout>
                  </img>
                </card>
              </flex>
            </layout>
          </container>
        </card>
      </flex>
    </layout>
  </container>
</template>

<script>
  export default {
    data: () => ({

    })
  }
</script>
