use admin
db.createUser({
    user: "admin",
    pwd: "secret",
    roles: [{ role: "userAdminAnyDatabase", db: "admin" }]
})

/// add user on