
/** function utk CRUD */
/** load dulu connection dari config */
const connection = require(`../config`)

// set table name to manage in this model file
const tableNamee = `admin`

// function utk mengambil data customer
exports.ambilDataAdmin = () => {
    return new Promise ((resolve, reject) => {
        // bikin query utk ambil data
        let query = `select * from admin`
        // jalankan query nya
        connection.query(query,(error, result) => {
            if (error) {
                reject(error)
            }
            resolve(result)
        })
    })
}

/** function utk ambil dara berdasarkan parameter khusus */
exports.findByCriteria = (parameter) => {
    return new Promise ((resolve, reject) => {
        let params = Object
            .keys(parameter)
            .map(item => `${item}="${parameter[item]}"`)
            .join(` and `)

            let query = `select * from admin where ${params}`
            // jalankan query nya
            connection.query(query, (error, result) =>{
                if (error) {
                    reject(error)
                }
                resolve(result)
            })
    })
}


// function utk menambah data apoteker baru
exports.tambahAdmin = (admin) => {
    return new Promise((resolve, reject) => {
        // ambil key dari object apoteker
        let key = Object
            .keys(admin)
            .join()
        
            // ambil value dari object apoteker
            let value = Object
                .keys(admin)
                .map(item =>`"${admin[item]}"`)
                .join()
            
            let query = `insert into admin (${key}) values (${value})`

            // jalankan query nya
            connection.query(query,(error, result) => {
                if (error) {
                    reject(error)
                }
                resolve(result)
            })
    })
}

/** buat fungsi utk update data apoteker */
exports.ubahAdmin = (data, parameter) => {
    return new Promise((resolve, reject) => {
        /** menyusun string utk query bagian perubahan data */
        let perubahanData = Object
            .keys(data) // [nama_apoteker, username, password]
            .map(item => `${item}="${data[item]}"`)
            .join()
 
        /** menyusun string utk query bagian
         * penentu data yg akan diubah
         */
        let params = Object
            .keys(parameter)
            .map(item => `${item}="${parameter[item]}"`)
            .join(` and `)

        /** susun query */
        let query = `update admin set ${perubahanData} where ${params}`
        /** jalankan query nya */
        connection.query(query, (error, result) => {
            if (error) {
                reject(error)
            }
            resolve(result)
        })
    })
}

exports.delete = (parameter) => {
    return new Promise((resolve, rejected) => {
        /** -----------------------------------------
         * parameter contain data like this:
         * parameter = {
         *      id: '1'
         * }
         * 
         * to create Query for update data, we have to
         * arrange every key and its value of parameter
         * to be string
         * ----------------------------------------------
         */

        /** ----------------------------------------------
         * arrange list of parameter's keys and its value as string */
        let params = Object
            .keys(parameter)
            .map(key => `${key}="${parameter[key]}"`)
            .join(" and ")
        /** result:
         * params = ' id="1" '
         * ------------------------------------------------
         */

        /** create query for delete */
        let query = `delete from ${tableNamee} where ${params}`

        /** show query as log in console */
        console.log(`Run: ${query}`)

        /** run query */
        connection.query(query, (error, result) => {
            if (error) {
                /** reject with error message */
                rejected(error.message)
            }

            /** return resolve with data */
            resolve(result)
        })
    })
}