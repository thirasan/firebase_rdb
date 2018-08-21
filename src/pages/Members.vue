<template>
  <div>
    <ul>
      <li v-for="(item, index) in list" :key="index" @click="viewUser(index)">
        {{item.value.email}}
      </li>
    </ul>
    <Profile :user="this.list[this.index].value"></Profile>
  </div>
</template>

<script>
import * as RealTimeDatabase from '@/firebase/RealTimeDatabase'
import Profile from '@/components/Profile'

export default {
  name: 'Members',
  data () {
    return {
      list: [{
        key: 0,
        value: {
          email: 'loading',
          password: 'loading',
          firstname: 'loading',
          lastname: 'loading',
          phone_number: 'loading'
        }
      }],
      index: 0
    }
  },
  async mounted () {
    const users = await RealTimeDatabase.userLists()
    this.list = users
  },
  methods: {
    viewUser (index) {
      this.index = index
    }
  },
  components: {
    'Profile': Profile
  }
}
</script>
