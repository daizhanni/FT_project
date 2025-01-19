<template>
  <section class="fields-overview">
    <h1>{{ $t('fields-overview.title') }}</h1>

    <div class="container">
      <div class="fields-list-container">
        <ul class="fields-list">
          <li v-for="field in fields" :key="field.slug" class="field-item">
            <h3 @click="toggleField(field.slug)" :class="{ active: isActive(field.slug) }">
              {{ field.title }}
            </h3>
          </li>
        </ul>
        <button @click="toggleAllFields" class="view-all-btn">
          {{ isAllExpanded ? $t('fields-overview["back-to-overview"]') : $t('fields-overview["view-all"]') }}
        </button>
      </div>

      <div class="field-details-container">
        <div v-if="!isAllExpanded && activeFieldSlug" class="active-field">
          <div class="field-header">
            <div class="field-image" :style="{ backgroundImage: 'url(' + getActiveField.imageUrl + ')' }"></div>
            <h2>{{ getActiveField.title }}</h2>
          </div>
          <p class="description-content" v-html="formatDescription(getActiveField.description)"></p>
          <button @click="showModal = true" class="study-button">
            {{ $t('fields-overview.study-button') }}
          </button>
        </div>

        <div v-if="isAllExpanded" class="all-fields">
          <div v-for="field in fields" :key="field.slug" class="field-details-item">
            <div class="field-header">
              <div class="field-image" :style="{ backgroundImage: 'url(' + field.imageUrl + ')' }"></div>
              <h3>{{ field.title }}</h3>
            </div>
            <p class="description-content" v-html="formatDescription(field.description)"></p>
          </div>
        </div>
      </div>
    </div>

    <div v-if="showModal" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <h3>{{ $t('fields-overview.modal.title') }}</h3>
        <form @submit.prevent="submitForm">
          <input
              v-model="form.name"
              type="text"
              :placeholder="$t('fields-overview.modal.name-placeholder')"
              class="form-input"
              required
          />
          <input
              v-model="form.email"
              type="email"
              :placeholder="$t('fields-overview.modal.email-placeholder')"
              class="form-input"
              required
          />
          <button type="submit" class="submit-button">{{ $t('fields-overview.modal.submit') }}</button>
        </form>
        <button class="close-btn" @click="closeModal">{{ $t('fields-overview.modal.close') }}</button>
      </div>
    </div>

    <div class="social-icons">
      <a :href="$t('social.instagram.url')" target="_blank" class="social-icon">
        <img :src="$t('social.instagram.image')" alt="Instagram" />
      </a>
      <a :href="$t('social.facebook.url')" target="_blank" class="social-icon">
        <img :src="$t('social.facebook.image')" alt="Facebook" />
      </a>
    </div>

  </section>
</template>

<script>
export default {
  name: 'FieldsOverview',
  data() {
    return {
      activeFieldSlug: 'matematika',
      isAllExpanded: false,
      showModal: false,
      form: {
        name: '',
        email: '',
      },
    };
  },
  computed: {
    fields() {
      return [
        {
          title: this.$t('fields-overview.fields[0].title'),
          slug: 'matematika',
          description: this.$t('fields-overview.fields[0].description'),
          imageUrl: '/foto/matematika.jpg',
        },
        {
          title: this.$t('fields-overview.fields[1].title'),
          slug: 'informatika',
          description: this.$t('fields-overview.fields[1].description'),
          imageUrl: '/foto/informatika.jpg',
        },
        {
          title: this.$t('fields-overview.fields[2].title'),
          slug: 'chemia',
          description: this.$t('fields-overview.fields[2].description'),
          imageUrl: '/foto/chemia.jpg',
        },
        {
          title: this.$t('fields-overview.fields[3].title'),
          slug: 'ekologia-a-environmentalistika',
          description: this.$t('fields-overview.fields[3].description'),
          imageUrl: '/foto/ekologia.jpg',
        },
        {
          title: this.$t('fields-overview.fields[4].title'),
          slug: 'geografia',
          description: this.$t('fields-overview.fields[4].description'),
          imageUrl: '/foto/geografia.jpg',
        },
        {
          title: this.$t('fields-overview.fields[5].title'),
          slug: 'ekonomika',
          description: this.$t('fields-overview.fields[5].description'),
          imageUrl: '/foto/ekonomika.jpg',
        },
        {
          title: this.$t('fields-overview.fields[6].title'),
          slug: 'biologia',
          description: this.$t('fields-overview.fields[6].description'),
          imageUrl: '/foto/biologia.jpg',
        },
        {
          title: this.$t('fields-overview.fields[7].title'),
          slug: 'gemologia',
          description: this.$t('fields-overview.fields[7].description'),
          imageUrl: '/foto/gemologia.jpg',
        },
        {
          title: this.$t('fields-overview.fields[8].title'),
          slug: 'ucitelstvo',
          description: this.$t('fields-overview.fields[8].description'),
          imageUrl: '/foto/ucitelstvo.jpg',
        },
      ];
    },
    getActiveField() {
      return this.fields.find((field) => field.slug === this.activeFieldSlug) || {};
    },
  },
  methods: {
    toggleField(slug) {
      if (this.isAllExpanded) return;
      this.activeFieldSlug = this.activeFieldSlug === slug ? null : slug;
    },
    isActive(slug) {
      return this.activeFieldSlug === slug;
    },
    toggleAllFields() {
      this.isAllExpanded = !this.isAllExpanded;
      if (this.isAllExpanded) {
        this.activeFieldSlug = null;
      }
    },
    closeModal() {
      this.showModal = false;
    },
    submitForm() {
      const message = this.$t('fields-overview.modal.form-submission-message', {
        name: this.form.name,
        email: this.form.email
      });

      alert(message);

      this.form.name = '';
      this.form.email = '';

      this.closeModal();
    },

    formatDescription(description) {
      return description.split('\n').map(line => `<p>${line}</p>`).join('');
    }
  },
};
</script>
<style scoped>
.fields-overview {
  font-family: 'Arial', sans-serif;
  padding: 40px;
  background: linear-gradient(to right, #a8e6cf, #d4f1e5);
  color: #333;
  border-radius: 15px;
  box-shadow: 0px 8px 25px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  color: #2a7f62;
  font-size: 2.5em;
  margin-bottom: 30px;
}

.container {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.fields-list-container {
  width: 30%;
  margin-right: 20px;
}

.fields-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.field-item h3 {
  cursor: pointer;
  font-size: 1em;
  margin: 15px 0;
  padding: 10px;
  background-color: #8ed1b8;
  border-radius: 10px;
  transition: background-color 0.3s;
}

.field-item h3:hover,
.field-item h3.active {
  background-color: #6fbd98;
  color: white;
}

.view-all-btn {
  background-color: #5bc88a;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 20px;
}

.view-all-btn:hover {
  background-color: #4b9b78;
}


.field-details-container .description-content {
  text-align: right;
  margin-top: 20px;
}


.field-header {
  display: flex;
  align-items: center;
}

.field-image {
  width: 150px;
  height: 150px;
  background-color: #f1f1f1;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  margin-right: 20px;
}

h2, h3 {
  font-size: 1.8em;
  color: #2a7f62;
}

.active-field {
  background: #e6f7f1;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
}

.description-content {
  margin-top: 20px;
}

.study-button {
  background-color: #6ccf87;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1.2em;
  margin-top: 20px;
}

.study-button:hover {
  background-color: #4dbb6b;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 30px;
  border-radius: 15px;
  width: 400px;
  text-align: center;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.2);
}

.form-input {
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 10px;
  font-size: 1em;
}

.submit-button {
  background-color: #6ccf87;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1.2em;
  margin-top: 10px;
}

.submit-button:hover {
  background-color: #4dbb6b;
}

.close-btn {
  background-color: #ccc;
  color: black;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  margin-top: 15px;
  cursor: pointer;
  font-size: 1.2em;
}

.close-btn:hover {
  background-color: #aaa;
}

.social-icons {
  display: flex;
  gap: 15px;
}

.social-icon img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  transition: transform 0.3s ease;
}

.social-icon img:hover {
  transform: scale(1.1);
}

</style>
