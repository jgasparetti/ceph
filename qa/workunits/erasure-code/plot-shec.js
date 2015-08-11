$(function() {
    $.plot("#encode", [
        {
	    data: encode_multiple_4096,
            label: "Multiple 4KB",
	    points: { show: true },
	    lines: { show: true },
	},
        {
	    data: encode_multiple_1048576,
            label: "Multiple 1MB",
	    points: { show: true },
	    lines: { show: true },
	},
        {
	    data: encode_single_4096,
            label: "Single 4KB",
	    points: { show: true },
	    lines: { show: true },
	},
        {
	    data: encode_single_1048576,
            label: "Single 1MB",
	    points: { show: true },
	    lines: { show: true },
	},
    ], {
	xaxis: {
	    mode: "categories",
	    tickLength: 0
	},
    }
          );

    $.plot("#decode", [
        {
	    data: decode_multiple_4096,
            label: "Multiple 4KB",
	    points: { show: true },
	    lines: { show: true },
	},
        {
	    data: decode_multiple_1048576,
            label: "Multiple 1MB",
	    points: { show: true },
	    lines: { show: true },
	},
        {
	    data: decode_single_4096,
            label: "Single 4KB",
	    points: { show: true },
	    lines: { show: true },
	},
        {
	    data: decode_single_1048576,
            label: "Single 1MB",
	    points: { show: true },
	    lines: { show: true },
	},
    ], {
	xaxis: {
	    mode: "categories",
	    tickLength: 0
	},
    }
          );

    $.plot("#encode4KB", [
        {
	    data: encode_multiple_4096,
            label: "Multiple 4KB",
	    points: { show: true },
	    lines: { show: true },
	},
        {
	    data: encode_single_4096,
            label: "Single 4KB",
	    points: { show: true },
	    lines: { show: true },
	},
    ], {
	xaxis: {
	    mode: "categories",
	    tickLength: 0
	},
    }
          );

    $.plot("#decode4KB", [
        {
	    data: decode_multiple_4096,
            label: "Multiple 4KB",
	    points: { show: true },
	    lines: { show: true },
	},
        {
	    data: decode_single_4096,
            label: "Single 4KB",
	    points: { show: true },
	    lines: { show: true },
	},
    ], {
	xaxis: {
	    mode: "categories",
	    tickLength: 0
	},
    }
          );

    $.plot("#encode1MB", [
        {
	    data: encode_multiple_1048576,
            label: "Multiple 1MB",
	    points: { show: true },
	    lines: { show: true },
	},
        {
	    data: encode_single_1048576,
            label: "Single 1MB",
	    points: { show: true },
	    lines: { show: true },
	},
    ], {
	xaxis: {
	    mode: "categories",
	    tickLength: 0
	},
    }
          );

    $.plot("#decode1MB", [
        {
	    data: decode_multiple_1048576,
            label: "Multiple 1MB",
	    points: { show: true },
	    lines: { show: true },
	},
        {
	    data: decode_single_1048576,
            label: "Single 1MB",
	    points: { show: true },
	    lines: { show: true },
	},
    ], {
	xaxis: {
	    mode: "categories",
	    tickLength: 0
	},
    }
          );

});
