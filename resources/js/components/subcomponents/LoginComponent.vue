<template>
    <div>
        <p class="text-danger fw-bold">SIGN IN TO </p>
        <p class="hris-header fw-bold fs-1">ENTERPRISE MS</p>
        <p class="fs-10 text-secondary">Log in with your data that you entered during your registration, or with the credentials provided by your organization administrator. </p>

        <div class="container p-0 m-0">
            <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
                <label for="floatingPassword">Password</label>
            </div>
            <div class="d-grid gap-2 mt-3">
                <button class="btn primary-bg text-white py-3 btn-text" type="button">LOG IN</button>
                <p class="text-primary cursor-pointer text-center pt-5 fs-5" @click.prevent="contactUs()">Inquire Today, Click Here!</p>
            </div>
        </div> 
    </div>
</template>

<script>
    
</script>