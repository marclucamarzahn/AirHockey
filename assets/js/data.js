export const players=[
 {id:'AH-0001',name:'Max Mustermann',rating:1542,high:1612,wins:61,losses:23,goals:512,against:391,titles:4,seasonPoints:42},
 {id:'AH-0002',name:'Leon Beispiel',rating:1498,high:1531,wins:48,losses:28,goals:447,against:402,titles:2,seasonPoints:36},
 {id:'AH-0003',name:'Marc Beispiel',rating:1454,high:1490,wins:39,losses:31,goals:386,against:372,titles:1,seasonPoints:31},
 {id:'AH-0004',name:'Tom Beispiel',rating:1437,high:1465,wins:35,losses:30,goals:355,against:348,titles:1,seasonPoints:28},
 {id:'AH-0005',name:'Paul Beispiel',rating:1394,high:1411,wins:27,losses:32,goals:299,against:320,titles:0,seasonPoints:22},
 {id:'AH-0006',name:'Felix Beispiel',rating:1371,high:1402,wins:24,losses:33,goals:276,against:311,titles:0,seasonPoints:19},
 {id:'AH-0007',name:'Jonas Beispiel',rating:1342,high:1388,wins:19,losses:35,goals:244,against:297,titles:0,seasonPoints:15},
 {id:'AH-0008',name:'Daniel Beispiel',rating:1309,high:1340,wins:15,losses:38,goals:211,against:286,titles:0,seasonPoints:11}
];
export const matches=[
 {id:'MATCH-000001',date:'12.12.2026',a:'AH-0001',b:'AH-0002',sa:7,sb:5,tournament:'T-2026-001',round:'Finale'},
 {id:'MATCH-000002',date:'12.12.2026',a:'AH-0003',b:'AH-0004',sa:6,sb:7,tournament:'T-2026-001',round:'Halbfinale'},
 {id:'MATCH-000003',date:'15.11.2026',a:'AH-0002',b:'AH-0005',sa:7,sb:3,tournament:'T-2026-002',round:'Finale'},
 {id:'MATCH-000004',date:'21.10.2026',a:'AH-0001',b:'AH-0004',sa:7,sb:4,tournament:'T-2026-003',round:'Finale'}
];
export const events=[
 {id:'E-0001',title:'Berlin Air Hockey Championship',date:'12.12.2026',time:'18:00 Uhr',place:'Berlin',type:'Turnier'},
 {id:'E-0002',title:'Offenes Vereinstraining',date:'19.12.2026',time:'19:00 Uhr',place:'Berlin',type:'Training'},
 {id:'E-0003',title:'Saisonauftakt 2027',date:'16.01.2027',time:'17:00 Uhr',place:'Berlin',type:'Meisterschaft'},
 {id:'E-0004',title:'Winter Showmatch',date:'30.01.2027',time:'20:00 Uhr',place:'Berlin',type:'Events'},
 {id:'E-0005',title:'Berlin Open',date:'13.02.2027',time:'18:00 Uhr',place:'Berlin',type:'Turnier'},
 {id:'E-0006',title:'Community Night',date:'27.02.2027',time:'19:00 Uhr',place:'Berlin',type:'Events'}
];
export const getPlayer=id=>players.find(p=>p.id===id);
