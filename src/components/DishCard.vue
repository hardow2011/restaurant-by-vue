<template>
  <div>
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img v-bind:src="formatedImages[0]" />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content has-text-left">
            <h1 class="title is-4">{{ dish.name }}</h1>
            <p class="subtitle is-6 has-text-weight-medium">
              {{ dish.price }} RD$
            </p>
          </div>
        </div>
        <div class="content has-text-left">
          {{ dish.description }}
        </div>
      </div>
      <footer class="card-footer">
        <a
          data-target="modal-{{ dish.id }}"
          aria-haspopup="true"
          href="#"
          class="card-footer-item modal-button"
          >Ver más</a
        >
      </footer>
    </div>
    <div id="modal-{{ dish.id }}" class="modal">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title"></p>
          <button class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body has-text-left">
          <div class="columns">
            <div class="column">
              <div class="block">
                <figure class="image is-4by3">
                  <img v-bind:src="formatedImages[0]" />
                </figure>
              </div>
              <div class="block">
                <div class="content">
                  <p class="subtitle">Ingredientes:</p>
                  <ul>
                    <li
                      v-for="(ingredient, index) in dish.ingredients"
                      :key="index"
                    >
                      {{ ingredient }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="column">
              <p class="title">{{ dish.name }}</p>
              <p class="subtitle is-6 has-text-weight-medium">
                {{ dish.price }} RD$
              </p>
              <p>{{ dish.description }}</p>
            </div>
          </div>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success">Save changes</button>
          <button class="button">Cancel</button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dish: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      formatedImages: new Array(),
    }
  },
  created() {},
  mounted() {
    this.dish.images.forEach((element) => {
      this.formatedImages.push(
        element.replace('/file/d/', '/uc?id=').replace('/view?usp=sharing', '')
      )
    })
    var rootEl = document.documentElement
    var $modals = getAll('.modal')
    var $modalButtons = getAll('.modal-button')
    var $modalCloses = getAll(
      '.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button'
    )
    // Modals

    if ($modalButtons.length > 0) {
      $modalButtons.forEach(function ($el) {
        $el.addEventListener('click', function () {
          var target = $el.dataset.target
          openModal(target)
        })
      })
    }

    if ($modalCloses.length > 0) {
      $modalCloses.forEach(function ($el) {
        $el.addEventListener('click', function () {
          closeModals()
        })
      })
    }

    function openModal(target) {
      var $target = document.getElementById(target)
      rootEl.classList.add('is-clipped')
      console.log($target)
      $target.classList.add('is-active')
    }

    function closeModals() {
      rootEl.classList.remove('is-clipped')
      $modals.forEach(function ($el) {
        $el.classList.remove('is-active')
      })
    }

    document.addEventListener('keydown', function (event) {
      var e = event || window.event

      if (e.keyCode === 27) {
        closeModals()
        closeDropdowns()
      }
    })

    // Dropdowns

    var $dropdowns = getAll('.dropdown:not(.is-hoverable)')

    if ($dropdowns.length > 0) {
      $dropdowns.forEach(function ($el) {
        $el.addEventListener('click', function (event) {
          event.stopPropagation()
          $el.classList.toggle('is-active')
        })
      })

      document.addEventListener('click', function () {
        closeDropdowns()
      })
    }

    function closeDropdowns() {
      $dropdowns.forEach(function ($el) {
        $el.classList.remove('is-active')
      })
    }

    // Utils

    function getAll(selector) {
      var parent =
        arguments.length > 1 && arguments[1] !== undefined
          ? arguments[1]
          : document

      return Array.prototype.slice.call(parent.querySelectorAll(selector), 0)
    }
  },
}
</script>