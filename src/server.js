const http = require('http');

const sampleRILResponse = [
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 68.2411270141602,
        "ReportingPeriod": "2025-01-01T00:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 67.7478256225586,
        "ReportingPeriod": "2025-01-01T01:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 67.8414459228516,
        "ReportingPeriod": "2025-01-01T02:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 68.2134704589844,
        "ReportingPeriod": "2025-01-01T03:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 67.863525390625,
        "ReportingPeriod": "2025-01-01T04:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 67.8847427368164,
        "ReportingPeriod": "2025-01-01T05:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 67.5436019897461,
        "ReportingPeriod": "2025-01-01T06:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 68.3283615112305,
        "ReportingPeriod": "2025-01-01T07:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 67.5218353271484,
        "ReportingPeriod": "2025-01-01T08:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 66.9803619384766,
        "ReportingPeriod": "2025-01-01T09:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 69.878173828125,
        "ReportingPeriod": "2025-01-01T10:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 67.2501907348633,
        "ReportingPeriod": "2025-01-01T11:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 67.2197189331055,
        "ReportingPeriod": "2025-01-01T12:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 68.5733413696289,
        "ReportingPeriod": "2025-01-01T13:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 68.2720565795898,
        "ReportingPeriod": "2025-01-01T14:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 67.9110412597656,
        "ReportingPeriod": "2025-01-01T15:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 68.0155792236328,
        "ReportingPeriod": "2025-01-01T16:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 67.9561996459961,
        "ReportingPeriod": "2025-01-01T17:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 67.4362258911133,
        "ReportingPeriod": "2025-01-01T18:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 67.634407043457,
        "ReportingPeriod": "2025-01-01T19:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 68.5879669189453,
        "ReportingPeriod": "2025-01-01T20:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 68.1281585693359,
        "ReportingPeriod": "2025-01-01T21:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 67.7564392089844,
        "ReportingPeriod": "2025-01-01T22:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 67.906494140625,
        "ReportingPeriod": "2025-01-01T23:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 68.1701278686523,
        "ReportingPeriod": "2025-01-02T00:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 67.9176254272461,
        "ReportingPeriod": "2025-01-02T01:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 68.2122421264648,
        "ReportingPeriod": "2025-01-02T02:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 68.1054840087891,
        "ReportingPeriod": "2025-01-02T03:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 67.9381103515625,
        "ReportingPeriod": "2025-01-02T04:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 68.5405502319336,
        "ReportingPeriod": "2025-01-02T05:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 68.8008117675781,
        "ReportingPeriod": "2025-01-02T06:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 67.7650451660156,
        "ReportingPeriod": "2025-01-02T07:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 67.916015625,
        "ReportingPeriod": "2025-01-02T08:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 68.027702331543,
        "ReportingPeriod": "2025-01-02T09:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 67.7719497680664,
        "ReportingPeriod": "2025-01-02T10:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 66.3037338256836,
        "ReportingPeriod": "2025-01-02T11:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 68.3407897949219,
        "ReportingPeriod": "2025-01-02T12:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 68.1060638427734,
        "ReportingPeriod": "2025-01-02T13:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 66.753662109375,
        "ReportingPeriod": "2025-01-02T14:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 68.0994720458984,
        "ReportingPeriod": "2025-01-02T15:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 68.9135589599609,
        "ReportingPeriod": "2025-01-02T16:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 67.0270309448242,
        "ReportingPeriod": "2025-01-02T17:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 67.7205429077148,
        "ReportingPeriod": "2025-01-02T18:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 68.6848526000977,
        "ReportingPeriod": "2025-01-02T19:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 67.8387069702148,
        "ReportingPeriod": "2025-01-02T20:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 68.2218704223633,
        "ReportingPeriod": "2025-01-02T21:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 67.9365768432617,
        "ReportingPeriod": "2025-01-02T22:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 67.9239959716797,
        "ReportingPeriod": "2025-01-02T23:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 68.1473846435547,
        "ReportingPeriod": "2025-01-03T00:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 68.2981185913086,
        "ReportingPeriod": "2025-01-03T01:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 67.7885360717773,
        "ReportingPeriod": "2025-01-03T02:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 68.1892776489258,
        "ReportingPeriod": "2025-01-03T03:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 67.8053588867188,
        "ReportingPeriod": "2025-01-03T04:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 68.2273178100586,
        "ReportingPeriod": "2025-01-03T05:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 67.7372894287109,
        "ReportingPeriod": "2025-01-03T06:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 68.1091384887695,
        "ReportingPeriod": "2025-01-03T07:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 67.8867034912109,
        "ReportingPeriod": "2025-01-03T08:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 68.0877380371094,
        "ReportingPeriod": "2025-01-03T09:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 67.9639205932617,
        "ReportingPeriod": "2025-01-03T10:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 69.9781265258789,
        "ReportingPeriod": "2025-01-03T11:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 68.2679901123047,
        "ReportingPeriod": "2025-01-03T12:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 67.6371917724609,
        "ReportingPeriod": "2025-01-03T13:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 67.994010925293,
        "ReportingPeriod": "2025-01-03T14:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 65.8060531616211,
        "ReportingPeriod": "2025-01-03T15:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 67.6584014892578,
        "ReportingPeriod": "2025-01-03T16:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 69.1069717407227,
        "ReportingPeriod": "2025-01-03T17:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 66.5656433105469,
        "ReportingPeriod": "2025-01-03T18:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 67.9698028564453,
        "ReportingPeriod": "2025-01-03T19:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 68.3248062133789,
        "ReportingPeriod": "2025-01-03T20:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 68.0075759887695,
        "ReportingPeriod": "2025-01-03T21:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 68.4187088012695,
        "ReportingPeriod": "2025-01-03T22:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 67.5882263183594,
        "ReportingPeriod": "2025-01-03T23:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 68.2144241333008,
        "ReportingPeriod": "2025-01-04T00:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 67.4447555541992,
        "ReportingPeriod": "2025-01-04T01:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 68.1318893432617,
        "ReportingPeriod": "2025-01-04T02:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 68.1262817382813,
        "ReportingPeriod": "2025-01-04T03:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 67.4753265380859,
        "ReportingPeriod": "2025-01-04T04:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 68.2594757080078,
        "ReportingPeriod": "2025-01-04T05:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 68.0526657104492,
        "ReportingPeriod": "2025-01-04T06:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 68.1439971923828,
        "ReportingPeriod": "2025-01-04T07:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 68.1583023071289,
        "ReportingPeriod": "2025-01-04T08:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 67.031135559082,
        "ReportingPeriod": "2025-01-04T09:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 68.6371688842773,
        "ReportingPeriod": "2025-01-04T10:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 68.1824645996094,
        "ReportingPeriod": "2025-01-04T11:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 67.9877548217773,
        "ReportingPeriod": "2025-01-04T12:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 68.3282775878906,
        "ReportingPeriod": "2025-01-04T13:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 67.2381134033203,
        "ReportingPeriod": "2025-01-04T14:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 68.1703567504883,
        "ReportingPeriod": "2025-01-04T15:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 68.0885009765625,
        "ReportingPeriod": "2025-01-04T16:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 68.1972351074219,
        "ReportingPeriod": "2025-01-04T17:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 68.1278839111328,
        "ReportingPeriod": "2025-01-04T18:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 67.6918334960938,
        "ReportingPeriod": "2025-01-04T19:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 68.0432205200195,
        "ReportingPeriod": "2025-01-04T20:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 67.9549331665039,
        "ReportingPeriod": "2025-01-04T21:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 68.111328125,
        "ReportingPeriod": "2025-01-04T22:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 67.88232421875,
        "ReportingPeriod": "2025-01-04T23:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 67.6843948364258,
        "ReportingPeriod": "2025-01-05T00:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 68.0195388793945,
        "ReportingPeriod": "2025-01-05T01:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 67.9969253540039,
        "ReportingPeriod": "2025-01-05T02:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 68.0194931030273,
        "ReportingPeriod": "2025-01-05T03:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 68.0413436889648,
        "ReportingPeriod": "2025-01-05T04:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 67.8216094970703,
        "ReportingPeriod": "2025-01-05T05:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 68.1044464111328,
        "ReportingPeriod": "2025-01-05T06:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 68.6407165527344,
        "ReportingPeriod": "2025-01-05T07:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 67.6912231445313,
        "ReportingPeriod": "2025-01-05T08:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 67.555419921875,
        "ReportingPeriod": "2025-01-05T09:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 68.6334533691406,
        "ReportingPeriod": "2025-01-05T10:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 67.8246994018555,
        "ReportingPeriod": "2025-01-05T11:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 68.4325637817383,
        "ReportingPeriod": "2025-01-05T12:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 67.9785614013672,
        "ReportingPeriod": "2025-01-05T13:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 67.8845596313477,
        "ReportingPeriod": "2025-01-05T14:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 68.0021896362305,
        "ReportingPeriod": "2025-01-05T15:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 68.1033935546875,
        "ReportingPeriod": "2025-01-05T16:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 67.9328536987305,
        "ReportingPeriod": "2025-01-05T17:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 67.870735168457,
        "ReportingPeriod": "2025-01-05T18:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 67.9427947998047,
        "ReportingPeriod": "2025-01-05T19:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 68.0443267822266,
        "ReportingPeriod": "2025-01-05T20:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 67.9702224731445,
        "ReportingPeriod": "2025-01-05T21:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 68.2834548950195,
        "ReportingPeriod": "2025-01-05T22:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 67.9393081665039,
        "ReportingPeriod": "2025-01-05T23:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 67.4870529174805,
        "ReportingPeriod": "2025-01-06T00:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 67.6784896850586,
        "ReportingPeriod": "2025-01-06T01:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 68.4402313232422,
        "ReportingPeriod": "2025-01-06T02:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 67.9948959350586,
        "ReportingPeriod": "2025-01-06T03:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 67.7626876831055,
        "ReportingPeriod": "2025-01-06T04:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 67.9437942504883,
        "ReportingPeriod": "2025-01-06T05:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 68.172233581543,
        "ReportingPeriod": "2025-01-06T06:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 68.2152099609375,
        "ReportingPeriod": "2025-01-06T07:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 67.8828048706055,
        "ReportingPeriod": "2025-01-06T08:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 68.0587539672852,
        "ReportingPeriod": "2025-01-06T09:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 68.1464614868164,
        "ReportingPeriod": "2025-01-06T10:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 67.9446716308594,
        "ReportingPeriod": "2025-01-06T11:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 68.1853485107422,
        "ReportingPeriod": "2025-01-06T12:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 67.9480133056641,
        "ReportingPeriod": "2025-01-06T13:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 68.2087554931641,
        "ReportingPeriod": "2025-01-06T14:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 68.0481338500977,
        "ReportingPeriod": "2025-01-06T15:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 67.8603363037109,
        "ReportingPeriod": "2025-01-06T16:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 67.9150924682617,
        "ReportingPeriod": "2025-01-06T17:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 67.8343048095703,
        "ReportingPeriod": "2025-01-06T18:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 68.1084976196289,
        "ReportingPeriod": "2025-01-06T19:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 67.9785995483398,
        "ReportingPeriod": "2025-01-06T20:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 67.5395889282227,
        "ReportingPeriod": "2025-01-06T21:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 67.5978012084961,
        "ReportingPeriod": "2025-01-06T22:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 66.8945617675781,
        "ReportingPeriod": "2025-01-06T23:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 68.5485534667969,
        "ReportingPeriod": "2025-01-07T00:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 67.2995986938477,
        "ReportingPeriod": "2025-01-07T01:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 68.1767959594727,
        "ReportingPeriod": "2025-01-07T02:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 68.1175994873047,
        "ReportingPeriod": "2025-01-07T03:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 67.9977111816406,
        "ReportingPeriod": "2025-01-07T04:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 68.1792602539063,
        "ReportingPeriod": "2025-01-07T05:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 67.2895050048828,
        "ReportingPeriod": "2025-01-07T06:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 68.2793655395508,
        "ReportingPeriod": "2025-01-07T07:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 67.8197250366211,
        "ReportingPeriod": "2025-01-07T08:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 67.897216796875,
        "ReportingPeriod": "2025-01-07T09:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 68.7280654907227,
        "ReportingPeriod": "2025-01-07T10:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 67.701416015625,
        "ReportingPeriod": "2025-01-07T11:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 67.94140625,
        "ReportingPeriod": "2025-01-07T12:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 67.7963562011719,
        "ReportingPeriod": "2025-01-07T13:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 68.9052963256836,
        "ReportingPeriod": "2025-01-07T14:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 68.5153198242188,
        "ReportingPeriod": "2025-01-07T15:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 67.6928329467773,
        "ReportingPeriod": "2025-01-07T16:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 67.8805770874023,
        "ReportingPeriod": "2025-01-07T17:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 67.9546737670898,
        "ReportingPeriod": "2025-01-07T18:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 68.1805953979492,
        "ReportingPeriod": "2025-01-07T19:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 68.0285797119141,
        "ReportingPeriod": "2025-01-07T20:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 68.0342407226563,
        "ReportingPeriod": "2025-01-07T21:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 67.8989562988281,
        "ReportingPeriod": "2025-01-07T22:30:00"
    },
    {
        "name": "KOP_IX_GAS_SEZ_LTHR_DEAERATOR_DRUM_COMMON_LEVEL_C_AC",
        "UOM": "%",
        "Value": 68.1815414428711,
        "ReportingPeriod": "2025-01-07T23:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 3.37467622756958,
        "ReportingPeriod": "2025-01-01T00:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 2.48539710044861,
        "ReportingPeriod": "2025-01-01T01:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 3.78556275367737,
        "ReportingPeriod": "2025-01-01T02:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 2.01196670532227,
        "ReportingPeriod": "2025-01-01T03:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.147741287946701,
        "ReportingPeriod": "2025-01-01T04:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.0845685005187988,
        "ReportingPeriod": "2025-01-01T05:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.0743615627288818,
        "ReportingPeriod": "2025-01-01T06:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.0743615627288818,
        "ReportingPeriod": "2025-01-01T07:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.0743615627288818,
        "ReportingPeriod": "2025-01-01T08:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.0743615627288818,
        "ReportingPeriod": "2025-01-01T09:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.0743615627288818,
        "ReportingPeriod": "2025-01-01T10:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.0743615627288818,
        "ReportingPeriod": "2025-01-01T11:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.0743615627288818,
        "ReportingPeriod": "2025-01-01T12:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.0743615627288818,
        "ReportingPeriod": "2025-01-01T13:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.0743615627288818,
        "ReportingPeriod": "2025-01-01T14:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.072202205657959,
        "ReportingPeriod": "2025-01-01T15:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.072202205657959,
        "ReportingPeriod": "2025-01-01T16:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.072202205657959,
        "ReportingPeriod": "2025-01-01T17:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.0824093818664551,
        "ReportingPeriod": "2025-01-01T18:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.0924203395843506,
        "ReportingPeriod": "2025-01-01T19:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.112834692001343,
        "ReportingPeriod": "2025-01-01T20:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.153270483016968,
        "ReportingPeriod": "2025-01-01T21:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.226245239377022,
        "ReportingPeriod": "2025-01-01T22:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.330325365066528,
        "ReportingPeriod": "2025-01-01T23:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 10.1997995376587,
        "ReportingPeriod": "2025-01-02T00:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 10.1997995376587,
        "ReportingPeriod": "2025-01-02T01:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 10.1997995376587,
        "ReportingPeriod": "2025-01-02T02:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 10.1997995376587,
        "ReportingPeriod": "2025-01-02T03:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 10.1997995376587,
        "ReportingPeriod": "2025-01-02T04:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 3.77014970779419,
        "ReportingPeriod": "2025-01-02T05:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 8.08885669708252,
        "ReportingPeriod": "2025-01-02T06:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 7.45823574066162,
        "ReportingPeriod": "2025-01-02T07:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 4.68134307861328,
        "ReportingPeriod": "2025-01-02T08:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 2.99087762832642,
        "ReportingPeriod": "2025-01-02T09:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 2.8453803062439,
        "ReportingPeriod": "2025-01-02T10:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 2.85813736915588,
        "ReportingPeriod": "2025-01-02T11:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 2.57235908508301,
        "ReportingPeriod": "2025-01-02T12:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.0904574394226074,
        "ReportingPeriod": "2025-01-02T13:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.0800538063049316,
        "ReportingPeriod": "2025-01-02T14:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.0800538063049316,
        "ReportingPeriod": "2025-01-02T15:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.0800538063049316,
        "ReportingPeriod": "2025-01-02T16:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.0800538063049316,
        "ReportingPeriod": "2025-01-02T17:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.0800538063049316,
        "ReportingPeriod": "2025-01-02T18:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.0800538063049316,
        "ReportingPeriod": "2025-01-02T19:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.0800538063049316,
        "ReportingPeriod": "2025-01-02T20:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.0800538063049316,
        "ReportingPeriod": "2025-01-02T21:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.0800538063049316,
        "ReportingPeriod": "2025-01-02T22:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.0800538063049316,
        "ReportingPeriod": "2025-01-02T23:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.0800538063049316,
        "ReportingPeriod": "2025-01-03T00:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.0800538063049316,
        "ReportingPeriod": "2025-01-03T01:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.0800538063049316,
        "ReportingPeriod": "2025-01-03T02:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.0800538063049316,
        "ReportingPeriod": "2025-01-03T03:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.0900647640228271,
        "ReportingPeriod": "2025-01-03T04:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.121078729629517,
        "ReportingPeriod": "2025-01-03T05:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.162300109863281,
        "ReportingPeriod": "2025-01-03T06:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.246705293655396,
        "ReportingPeriod": "2025-01-03T07:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.39451265335083,
        "ReportingPeriod": "2025-01-03T08:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 2.34386825561523,
        "ReportingPeriod": "2025-01-03T09:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 10.1997995376587,
        "ReportingPeriod": "2025-01-03T10:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 10.1997995376587,
        "ReportingPeriod": "2025-01-03T11:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 10.1997995376587,
        "ReportingPeriod": "2025-01-03T12:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.557564079761505,
        "ReportingPeriod": "2025-01-03T13:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 3.75128412246704,
        "ReportingPeriod": "2025-01-03T14:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 7.65940570831299,
        "ReportingPeriod": "2025-01-03T15:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 9.21587371826172,
        "ReportingPeriod": "2025-01-03T16:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 3.53790020942688,
        "ReportingPeriod": "2025-01-03T17:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 3.88911414146423,
        "ReportingPeriod": "2025-01-03T18:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.0975239276885986,
        "ReportingPeriod": "2025-01-03T19:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.0875129699707031,
        "ReportingPeriod": "2025-01-03T20:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.0875129699707031,
        "ReportingPeriod": "2025-01-03T21:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.0775020122528076,
        "ReportingPeriod": "2025-01-03T22:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.0775020122528076,
        "ReportingPeriod": "2025-01-03T23:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.0775020122528076,
        "ReportingPeriod": "2025-01-04T00:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.0775020122528076,
        "ReportingPeriod": "2025-01-04T01:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.0775020122528076,
        "ReportingPeriod": "2025-01-04T02:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.0775020122528076,
        "ReportingPeriod": "2025-01-04T03:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.0775020122528076,
        "ReportingPeriod": "2025-01-04T04:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.0775020122528076,
        "ReportingPeriod": "2025-01-04T05:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.0842138156294823,
        "ReportingPeriod": "2025-01-04T06:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.0949721336364746,
        "ReportingPeriod": "2025-01-04T07:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.125593423843384,
        "ReportingPeriod": "2025-01-04T08:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.131455793976784,
        "ReportingPeriod": "2025-01-04T09:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.149541139602661,
        "ReportingPeriod": "2025-01-04T10:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.256716251373291,
        "ReportingPeriod": "2025-01-04T11:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.475567042827606,
        "ReportingPeriod": "2025-01-04T12:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 10.1997995376587,
        "ReportingPeriod": "2025-01-04T13:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 10.1997995376587,
        "ReportingPeriod": "2025-01-04T14:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 10.1997995376587,
        "ReportingPeriod": "2025-01-04T15:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 10.1997995376587,
        "ReportingPeriod": "2025-01-04T16:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 10.1997995376587,
        "ReportingPeriod": "2025-01-04T17:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.795157372951508,
        "ReportingPeriod": "2025-01-04T18:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.202539682388306,
        "ReportingPeriod": "2025-01-04T19:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.177612170577049,
        "ReportingPeriod": "2025-01-04T20:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.1231624558568,
        "ReportingPeriod": "2025-01-04T21:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.102627515792847,
        "ReportingPeriod": "2025-01-04T22:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.0922238826751709,
        "ReportingPeriod": "2025-01-04T23:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.0821086168289185,
        "ReportingPeriod": "2025-01-05T00:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.0820169448852539,
        "ReportingPeriod": "2025-01-05T01:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.0820169448852539,
        "ReportingPeriod": "2025-01-05T02:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.0820169448852539,
        "ReportingPeriod": "2025-01-05T03:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.0720059871673584,
        "ReportingPeriod": "2025-01-05T04:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.0721888765692711,
        "ReportingPeriod": "2025-01-05T05:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.074753999710083,
        "ReportingPeriod": "2025-01-05T06:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.074753999710083,
        "ReportingPeriod": "2025-01-05T07:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.074753999710083,
        "ReportingPeriod": "2025-01-05T08:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.074753999710083,
        "ReportingPeriod": "2025-01-05T09:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.0856048539280891,
        "ReportingPeriod": "2025-01-05T10:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.106553316116333,
        "ReportingPeriod": "2025-01-05T11:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.136978387832642,
        "ReportingPeriod": "2025-01-05T12:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.209213733673096,
        "ReportingPeriod": "2025-01-05T13:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 10.1997995376587,
        "ReportingPeriod": "2025-01-05T14:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 10.1997995376587,
        "ReportingPeriod": "2025-01-05T15:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 10.1997995376587,
        "ReportingPeriod": "2025-01-05T16:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 10.1997995376587,
        "ReportingPeriod": "2025-01-05T17:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.646200001239777,
        "ReportingPeriod": "2025-01-05T18:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 6.35047817230225,
        "ReportingPeriod": "2025-01-05T19:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 9.85976219177246,
        "ReportingPeriod": "2025-01-05T20:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 7.3697395324707,
        "ReportingPeriod": "2025-01-05T21:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.0987014770507813,
        "ReportingPeriod": "2025-01-05T22:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.0884945392608643,
        "ReportingPeriod": "2025-01-05T23:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.0884945392608643,
        "ReportingPeriod": "2025-01-06T00:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.0784835815429688,
        "ReportingPeriod": "2025-01-06T01:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.0784835815429688,
        "ReportingPeriod": "2025-01-06T02:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.0784835815429688,
        "ReportingPeriod": "2025-01-06T03:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.0784835815429688,
        "ReportingPeriod": "2025-01-06T04:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.0784835815429688,
        "ReportingPeriod": "2025-01-06T05:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.0784835815429688,
        "ReportingPeriod": "2025-01-06T06:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.0784835815429688,
        "ReportingPeriod": "2025-01-06T07:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.0784835815429688,
        "ReportingPeriod": "2025-01-06T08:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.0985052585601807,
        "ReportingPeriod": "2025-01-06T09:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.123897261917591,
        "ReportingPeriod": "2025-01-06T10:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.185163855552673,
        "ReportingPeriod": "2025-01-06T11:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.296315282583237,
        "ReportingPeriod": "2025-01-06T12:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.220936954021454,
        "ReportingPeriod": "2025-01-06T13:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.275511473417282,
        "ReportingPeriod": "2025-01-06T14:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.497289717197418,
        "ReportingPeriod": "2025-01-06T15:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 10.1997995376587,
        "ReportingPeriod": "2025-01-06T16:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 10.1997995376587,
        "ReportingPeriod": "2025-01-06T17:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 10.1997995376587,
        "ReportingPeriod": "2025-01-06T18:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 10.1997995376587,
        "ReportingPeriod": "2025-01-06T19:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 10.1997995376587,
        "ReportingPeriod": "2025-01-06T20:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 10.1997995376587,
        "ReportingPeriod": "2025-01-06T21:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 5.40059900283813,
        "ReportingPeriod": "2025-01-06T22:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 1.07043707370758,
        "ReportingPeriod": "2025-01-06T23:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 5.73213720321655,
        "ReportingPeriod": "2025-01-07T00:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.0941867828369141,
        "ReportingPeriod": "2025-01-07T01:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.0837833881378174,
        "ReportingPeriod": "2025-01-07T02:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.0837833881378174,
        "ReportingPeriod": "2025-01-07T03:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.0837833881378174,
        "ReportingPeriod": "2025-01-07T04:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.0837833881378174,
        "ReportingPeriod": "2025-01-07T05:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.0837833881378174,
        "ReportingPeriod": "2025-01-07T06:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.0788071304559708,
        "ReportingPeriod": "2025-01-07T07:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.073772668838501,
        "ReportingPeriod": "2025-01-07T08:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.073772668838501,
        "ReportingPeriod": "2025-01-07T09:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.073772668838501,
        "ReportingPeriod": "2025-01-07T10:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.073772668838501,
        "ReportingPeriod": "2025-01-07T11:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.0837833881378174,
        "ReportingPeriod": "2025-01-07T12:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.0937943458557129,
        "ReportingPeriod": "2025-01-07T13:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.129662990570068,
        "ReportingPeriod": "2025-01-07T14:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.170151710510254,
        "ReportingPeriod": "2025-01-07T15:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.262997388839722,
        "ReportingPeriod": "2025-01-07T16:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.432485312223434,
        "ReportingPeriod": "2025-01-07T17:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 10.1997995376587,
        "ReportingPeriod": "2025-01-07T18:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 10.1997995376587,
        "ReportingPeriod": "2025-01-07T19:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 10.1997995376587,
        "ReportingPeriod": "2025-01-07T20:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 10.1997995376587,
        "ReportingPeriod": "2025-01-07T21:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 0.371807187795639,
        "ReportingPeriod": "2025-01-07T22:30:00"
    },
    {
        "name": "KOP-UTILITY-J3-J3_PAS_DM_MB-C_Conductivity_C_AC",
        "UOM": "us/cm",
        "Value": 9.73784923553467,
        "ReportingPeriod": "2025-01-07T23:30:00"
    }
];

const sampleMRPLResponse = {
    "metadata": {
        "count": 48,
        "pageSize": 10,
        "page": 1,
        "totalPages": 5,
        "queryTime": "91 ms"
    },
    "results": [
        {
            "symbol": "PCAAS00",
            "data": [
                {
                    "bate": "c",
                    "value": 65.435,
                    "assessDate": "2025-04-10T00:00:00",
                    "isCorrected": "N",
                    "modDate": "2025-04-10T17:41:56"
                },
                {
                    "bate": "h",
                    "value": 65.44,
                    "assessDate": "2025-04-10T00:00:00",
                    "isCorrected": "N",
                    "modDate": "2025-04-10T17:41:56"
                },
                {
                    "bate": "l",
                    "value": 65.43,
                    "assessDate": "2025-04-10T00:00:00",
                    "isCorrected": "N",
                    "modDate": "2025-04-10T17:41:56"
                },
                {
                    "bate": "c",
                    "value": 62.685,
                    "assessDate": "2025-04-09T00:00:00",
                    "isCorrected": "N",
                    "modDate": "2025-04-09T17:16:44"
                },
                {
                    "bate": "h",
                    "value": 62.69,
                    "assessDate": "2025-04-09T00:00:00",
                    "isCorrected": "N",
                    "modDate": "2025-04-09T17:16:44"
                },
                {
                    "bate": "l",
                    "value": 62.68,
                    "assessDate": "2025-04-09T00:00:00",
                    "isCorrected": "N",
                    "modDate": "2025-04-09T17:16:44"
                }
            ]
        },
        {
            "symbol": "PCAAT00",
            "data": [
                {
                    "bate": "c",
                    "value": 65.4,
                    "assessDate": "2025-04-10T00:00:00",
                    "isCorrected": "N",
                    "modDate": "2025-04-10T08:39:03"
                },
                {
                    "bate": "h",
                    "value": 65.41,
                    "assessDate": "2025-04-10T00:00:00",
                    "isCorrected": "N",
                    "modDate": "2025-04-10T08:39:03"
                },
                {
                    "bate": "l",
                    "value": 65.39,
                    "assessDate": "2025-04-10T00:00:00",
                    "isCorrected": "N",
                    "modDate": "2025-04-10T08:39:03"
                },
                {
                    "bate": "c",
                    "value": 61.9,
                    "assessDate": "2025-04-09T00:00:00",
                    "isCorrected": "N",
                    "modDate": "2025-04-09T08:41:46"
                }
            ]
        }
    ]
};

function getRILResponse(req, res, sampleRILResponse) {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const kpiname = url.searchParams.get("kpiname");
    const fromdate = url.searchParams.get("fromdate");
    const todate = url.searchParams.get("todate");

    if (!kpiname && !fromdate && !todate) {
        return res.end(JSON.stringify(sampleRILResponse));
    }

    if (kpiname && (!fromdate || !todate)) {
        const updated = sampleRILResponse.map(item => ({
            ...item,
            name: kpiname
        }));
        return res.end(JSON.stringify(updated));
    }

    function parseDate(input) {
        const [day, month, year] = input.split("-").map(Number);
        return new Date(year, month - 1, day);
    }

    const from = parseDate(fromdate);
    const to = parseDate(todate);

    if (isNaN(from) || isNaN(to) || from > to) {
        res.statusCode = 400;
        return res.end(JSON.stringify({ error: "Invalid date format or range (expected dd-MM-yyyy)" }));
    }

    const results = [];
    let current = new Date(from);

    while (current <= to) {
        for (let hour = 0; hour < 24; hour++) {
            const date = new Date(current);
            date.setHours(hour, 0, 0, 0);
            results.push({
                name: kpiname,
                UOM: "%",
                Value: parseFloat((50 + Math.random() * 30).toFixed(4)),
                ReportingPeriod: date.toISOString()
            });
        }
        current.setDate(current.getDate() + 1);
    }

    return res.end(JSON.stringify(results));
}


function getMRPLResponse(req, res, sampleMRPLResponse) {
    const url = new URL(req.url, `http://${req.headers.host}`);

    if (url.searchParams.size < 1) {
        res.end(JSON.stringify(sampleMRPLResponse));
        return;
    }

    // --- parse query params ---
    const filter = url.searchParams.get("filter");
    const sort = url.searchParams.get("sort") || "assessDate:desc";
    const pageSize = parseInt(url.searchParams.get("pageSize") || "10");
    const bateFilter = url.searchParams.get("bate") || "c";

    // Extract symbols and date range from filter
    let symbols = [];
    let fromDate = null;
    let toDate = null;

    if (filter) {
        const matchSymbols = filter.match(/symbol\s+IN\s+\(([^)]+)\)/i);
        if (matchSymbols) {
            symbols = matchSymbols[1].replace(/"/g, "").split(",").map(s => s.trim());
        }
        const matchFrom = filter.match(/assessDate>="([^"]+)"/);
        const matchTo = filter.match(/assessDate<="([^"]+)"/);
        if (matchFrom) fromDate = new Date(matchFrom[1]);
        if (matchTo) toDate = new Date(matchTo[1]);
    }

    if (!fromDate || !toDate || isNaN(fromDate) || isNaN(toDate)) {
        res.statusCode = 400;
        return res.end(JSON.stringify({ error: "Invalid or missing date range" }));
    }

    // --- generate random values ---
    const results = symbols.map(symbol => {
        const data = [];
        let current = new Date(fromDate);

        while (current <= toDate) {
            // only once per day per bate type
            const value = parseFloat((60 + Math.random() * 10).toFixed(3));
            data.push({
                bate: bateFilter,
                value: value,
                assessDate: current.toISOString().split("T")[0] + "T00:00:00",
                isCorrected: "N",
                modDate: new Date().toISOString().slice(0, 19).replace("T", " ")
            });
            current.setDate(current.getDate() + 1);
        }

        // sort by assessDate
        data.sort((a, b) => {
            if (sort.includes("desc")) {
                return new Date(b.assessDate) - new Date(a.assessDate);
            }
            return new Date(a.assessDate) - new Date(b.assessDate);
        });

        return { symbol, data: data.slice(0, pageSize) };
    });

    const response = {
        metadata: {
            count: results.reduce((sum, r) => sum + r.data.length, 0),
            pageSize: pageSize,
            page: 1,
            totalPages: 1,
            queryTime: "mock"
        },
        results
    };

    res.end(JSON.stringify(response));
}


const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    res.setHeader("Content-Type", "application/json");

    if (url.pathname === "/") {
        // root -> return sample
        res.end(JSON.stringify(sampleRILResponse));
    }
    else if (url.pathname === "/api/kpival") {
        getRILResponse(req, res, sampleRILResponse);
    }
    else if (url.pathname === "/market-data/v3/value/history/symbol" || url.pathname === "/market-data") {
        getMRPLResponse(req, res, sampleMRPLResponse);
    }
    else {
        res.statusCode = 404;
        res.end(JSON.stringify({ error: "Not found" }));
    }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});

//// Create a new HTTP server
//const server = http.createServer((req, res) => {
//  // Set the response status code and headers
//  res.statusCode = 200;
//  res.setHeader('Content-Type', 'text/plain');

//  // Send the response body
//  res.end('Hello, World!\n');
//});

//// Start the server and listen for incoming connections
//server.listen(port, () => {
//  console.log(`Server running at http://localhost:${port}/`);
//});



