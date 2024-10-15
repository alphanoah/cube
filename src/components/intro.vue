<template>
  <section :class="'section collapse multi-collapse ' + showClass" :id="showID">
    <div class="intro flex">
      <div class="unit">
        <div class="logo">
          <img src="../assets/images/intro/img1.png" alt="">
        </div>
      </div>
      <div class="unit" v-for="item in commonData.desc" v-html="item"></div>
    </div>
    <div class="intro flex">
      <div v-for="(value, index) in commonData.diagrams" class="unit" :data-index="index">
        <div class="letter">
          <p v-for="item in value.desc">
            {{ item }}
          </p>
          <div class="imgArea">
            <img v-for="item2 in value.images" :src="item2" alt="">
          </div>
        </div>
      </div>
    </div>
    <hr>
    <div class="intro flex">
      <h3>優化初學者的⽅法 Optimising the Beginner’s Method</h3>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                    aria-expanded="true" aria-controls="collapseOne">
              第一层十字交叉 First Layer Corners
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
               data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <ul>
                <li>
                  在做交叉時節省時間的⼀個簡單⽅法是<strong>學習顏⾊中性</strong> -
                  能夠從六種顏⾊中的任何⼀種開始解決⽴⽅體。由於能夠從任何顏⾊開始，您可以從六種不同的可能性中找出最容易解決的傳中，並提⾼傳中的速度。
                </li>
                <li>
                  另⼀個要學習的好習慣是解決底⾯上的⼗字。這意味著您將能夠避免⽴⽅體在解決交叉⾓和第⼀層⾓之間的旋轉。
                </li>
                <li>
                  修復翻轉的交叉邊緣（在底⾯上）: F' D R' D'
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              第⼀層⾓ First Layer Corners
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
               data-bs-parent="#accordionExample">
            <div class="accordion-body">
              在第⼀層提⾼效率的⼀個簡單直觀的技巧是<strong>從任何給定情況中選擇最容易解決的⾓落</strong>。比如：当有兩個屬於底層的可⾒⾓，插⼊⼀個⾓的交叉顏⾊標籤朝上的算法⽐其他兩種情況要⻑得多，所以選擇解決后者是有意義的。
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              最後⼀層邊緣⽅向 Last Layer Edge Orientation
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
               data-bs-parent="#accordionExample">
            <div class="accordion-body">

            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingFour">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
              最後⼀層⾓置換 Last Layer Corner Permutation
            </button>
          </h2>
          <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
               data-bs-parent="#accordionExample">
            <div class="accordion-body">

            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingFive">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
              最後⼀層邊排列 Last Layer Edge Permutation
            </button>
          </h2>
          <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive"
               data-bs-parent="#accordionExample">
            <div class="accordion-body">

            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  name: "Intro",
  props: ['showID', 'showClass', 'commonData'],
}
</script>

<style scoped>

</style>