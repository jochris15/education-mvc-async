# MVC Async

## [What is MVC ?](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)

Model View Controller adalah arsitektur aplikasi yang memisahkan aplikasi menjadi tiga bagian utama:

- **Model** adalah bagian yang berhubungan dengan komunikasi data dari aplikasi kita ke sumber datanya (contoh sumber data: file json, file csv, database, dll).

- **View** adalah bagian yang berhubungan dengan tampilan atau user interface.

- **Controller** adalah bagian yang menghubungkan atau mengkomunikasikan antara model dan view.


![flow MVC](https://miro.medium.com/max/700/1*hTlpGXMh9EFefBIT9NrTDQ.png)

## Asynchronous + MVC
Dengan menggunakan MVC kita bisa memisahkan antara tampilan dan logika aplikasi kita. Dengan menggunakan Asynchronous kita bisa membuat aplikasi kita lebih responsif dan tidak nge-freeze ketika melakukan proses yang lama. Dengan menggunakan MVC + Asynchronous kita bisa membuat aplikasi yang lebih baik dan lebih mudah untuk di maintain.

## Demo 
Buatlah sebuah aplikasi Game list via command-line secara asynchronus.
Berikut command-command yang ada pada Game App:

```
$ node game.js
$ node game.js help 
$ node game.js list 
$ node game.js add <game_name> <game_developer>
$ node game.js delete <game_id>
```
### Command "help" / Default

Input: 
```
$ node game.js
$ node game.js help
```

Output : 
```
    =============
    COMMAND LINE
    =============

    $ node game.js
    $ node game.js help
    $ node game.js list
    $ node game.js add <game_name> <game_developer>
    $ node game.js delete <game_id>
    
    =============
```

### Command "list"
Menampilkan daftar semua `Game`, pastikan data game adalah object instance dari class `Game`.

Input: 
```
$ node game.js list 
```

Output : 
```
┌─────────┬─────────┬────────────────────────────────┬─────────────────────┐
│ (index) │ Game ID │ Nama Game                      │ Nama Developer      │
├─────────┼─────────┼────────────────────────────────┼─────────────────────┤
│ 0       │ 1       │ 'League of Legends: Wild Rift' │ 'Riot Games'        │
│ 1       │ 2       │ 'Mobile Legends: Bang Bang'    │ 'Moonton'           │
│ 2       │ 3       │ 'Arena Of Valor'               │ 'Tencent Games'     │
│ 3       │ 4       │ 'DOTA 2'                       │ 'Valve Corporation' │
│ 4       │ 5       │ 'VALORANT'                     │ 'Riot Games'        │
│ 5       │ 6       │ 'CS:GO'                        │ 'Valve Corporation' │
└─────────┴─────────┴────────────────────────────────┴─────────────────────┘
```

### Command "add <game_name> <game_developer>"
Menambahkan data `Game` baru

Input: 
```
$ node game.js add FIFA25 EA
```

Output : 
```
Added "FIFA25" to your game list...
```

### Command "delete <game_id>"
Menghapus data `Game` bedasarkan input game_id

Input: 
```
$ node game.js delete 9
```

Output : 
```
Delete "FIFA25" from your game list...
```