<template>
        <div id="map-container"></div>  
</template>

<style>
#map-container {
    width:100%;
    height: 100%;
}
</style>

<script>
import AMap from 'AMap'

export default {
    ready () {
        const map = new AMap.Map('map-container', {
            resizeEnable: true,
            zoom: 15,
            center: [116.39, 39.9]
        })
        console.log(map)
         AMap.service(['AMap.PlaceSearch'], function () {
        var placeSearch = new AMap.PlaceSearch({ // 构造地点查询类
            pageSize: 5,
            pageIndex: 1,
            city: '010', // 城市
            map: map,
            panel: 'panel'
        })
        placeSearch.search('方恒')  //  关键字查询
    })
    }
}
</script>