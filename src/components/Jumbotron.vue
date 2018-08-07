<template>
    <section class="jumbotron text-center">
        <div class="container">
            <img src="../assets/img/logo.png" alt="logo">
            <h1 class="jumbotron-heading">
                {{ title }}
            </h1>
            <p class="lead text-muted">
                {{ description }}
            </p>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Jumbotrom',
        props: {
            title: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            }
        }
    }
</script>

<style scoped>
    .jumbotron{
        background-color: #f7f7f7;
        border-bottom: 0.2rem solid #e0e0e0;
        padding: 6rem 2rem 3rem 2rem;
        margin-bottom: 0;
        border-radius: 0;
    }
    h1{
        margin-top: 0.5rem;
    }
    a{
        color: #fc3268;
    }
</style>
