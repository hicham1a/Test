var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Zone_Patrimoine_Nord_Errachidia_1 = new ol.format.GeoJSON();
var features_Zone_Patrimoine_Nord_Errachidia_1 = format_Zone_Patrimoine_Nord_Errachidia_1.readFeatures(json_Zone_Patrimoine_Nord_Errachidia_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zone_Patrimoine_Nord_Errachidia_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zone_Patrimoine_Nord_Errachidia_1.addFeatures(features_Zone_Patrimoine_Nord_Errachidia_1);
var lyr_Zone_Patrimoine_Nord_Errachidia_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Zone_Patrimoine_Nord_Errachidia_1, 
                style: style_Zone_Patrimoine_Nord_Errachidia_1,
                interactive: true,
                title: '<img src="styles/legend/Zone_Patrimoine_Nord_Errachidia_1.png" /> Zone_Patrimoine_Nord_Errachidia'
            });
var format_Gosites_ER_2 = new ol.format.GeoJSON();
var features_Gosites_ER_2 = format_Gosites_ER_2.readFeatures(json_Gosites_ER_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gosites_ER_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gosites_ER_2.addFeatures(features_Gosites_ER_2);
var lyr_Gosites_ER_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Gosites_ER_2, 
                style: style_Gosites_ER_2,
                interactive: true,
                title: '<img src="styles/legend/Gosites_ER_2.png" /> Géosites_ER'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Zone_Patrimoine_Nord_Errachidia_1.setVisible(true);lyr_Gosites_ER_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Zone_Patrimoine_Nord_Errachidia_1,lyr_Gosites_ER_2];
lyr_Zone_Patrimoine_Nord_Errachidia_1.set('fieldAliases', {'id': 'id', });
lyr_Gosites_ER_2.set('fieldAliases', {'ele': 'ele', 'name': 'name', 'X': 'X', 'Y': 'Y', });
lyr_Zone_Patrimoine_Nord_Errachidia_1.set('fieldImages', {'id': 'TextEdit', });
lyr_Gosites_ER_2.set('fieldImages', {'ele': 'TextEdit', 'name': 'TextEdit', 'X': '', 'Y': '', });
lyr_Zone_Patrimoine_Nord_Errachidia_1.set('fieldLabels', {'id': 'no label', });
lyr_Gosites_ER_2.set('fieldLabels', {'ele': 'no label', 'name': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_Gosites_ER_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});