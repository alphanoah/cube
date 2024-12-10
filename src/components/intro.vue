<template>
  <section :class="'section collapse multi-collapse ' + showClass" :id="showID">
    <div class="intro flex">
      <div class="unit">
        <div class="logo">
          <img src="../../public/images/intro/img1.png" alt="">
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
            <img v-for="item2 in value.images" :src="`images/${ item2 }`" alt="">
          </div>
        </div>
      </div>
    </div>
    <hr>
    <div class="Best-intro flex">
      <h3>菲神课堂技巧 - F2L</h3>
      <div class="accordion" id="f2lTips" style="width: 100%;">
        <div class="accordion-item">
          <h2 class="accordion-header" id="f2lTips1">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#f2lTips1Detail"
                    aria-expanded="true" aria-controls="f2lTips1Detail">
              1. 找到待还原的一组F2L空槽 Identify two pieces of an F2L pair
            </button>
          </h2>
          <div id="f2lTips1Detail" class="accordion-collapse collapse show" aria-labelledby="f2lTips1"
               data-bs-parent="#f2lTips">
            <div class="accordion-body">

            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="f2lTips2">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#f2lTips2Detail"
                    aria-controls="f2lTips2Detail">
              2. 角棱对转到顶层 Bring the pieces into the top layer
            </button>
          </h2>
          <div id="f2lTips2Detail" class="accordion-collapse collapse" aria-labelledby="f2lTips2"
               data-bs-parent="#f2lTips">
            <div class="accordion-body">

            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="f2lTips3">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#f2lTips3Detail"
                    aria-controls="f2lTips3Detail">
              3. 分开角棱对 Split up the pieces (若已分开则跳过。将角块转到底层，转动棱块，再转回角块=>RUR‘)
            </button>
          </h2>
          <div id="f2lTips3Detail" class="accordion-collapse collapse" aria-labelledby="f2lTips3"
               data-bs-parent="#f2lTips">
            <div class="accordion-body">

            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="f2lTips4">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#f2lTips4Detail"
                    aria-controls="f2lTips4Detail">
              4. 将F2L角棱块填补到空槽 Solve the pair
            </button>
          </h2>
          <div id="f2lTips4Detail" class="accordion-collapse collapse" aria-labelledby="f2lTips4"
               data-bs-parent="#f2lTips">
            <div class="accordion-body">
              <ol>
                <li>顶层角棱块顶面颜色不同 RUR' / L' U' L</li>
                <ol>
                  <li>角块在顶层，棱块在中层，通过 RU R‘ 转到顶层</li>
                  <li>角棱块相邻，则通过R/L藏角块（若要不打乱F2L，通过U’ 移动），再拆开</li>
                  <li>公式： 右手 RU R‘ ，白面朝右；左手 L' U' L，白面在前， 则将白面朝左再转</li>
                </ol>
                <li>顶层角棱块顶面颜色相同 URU' R' / U'L' UL</li>
                <ol>
                  <li>藏角，旋转白面（有F2L影响，通过移动顶层）白面朝前用F藏底层，白面朝侧用R’藏底层</li>
                  <li>公式： 右手UR U' R'；左手U'L'UL</li>
                </ol>
                <li>顶层角块顶面为白</li>
                <ol>
                  <li>将棱块侧面与同色中心块对齐</li>
                  <li>旋转棱块至远离正确空槽的中层（即隐藏棱块到中层）</li>
                  <li>旋转顶层直至角棱块匹配</li>
                </ol>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr>
    <div class="intro flex">
      <h3>優化初學者的⽅法 Optimising the Beginner’s Method</h3>
      <div class="accordion" id="accordionExample" style="width: 100%;">
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