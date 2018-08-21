<template>
  <div>
    Email: {{this.user.email}}<br/>
    FirstName: {{this.user.firstname}}<br/>
    LastName: {{this.user.lastname}}<br/>
    phoneNumber: {{this.user.phone_number}}<br/>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  props: {
    user: {
      default: () => ({}),
      type: Object
    }
  }
}
</script>
