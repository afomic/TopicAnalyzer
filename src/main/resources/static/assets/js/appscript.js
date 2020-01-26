let randonGen =(start, end, size)=>{
    let value = [];
    for(let i = 0; i <size; i++){
        let ran = start + Math.round(Math.random() * end);
        value.push(ran);
    }
    return value;
}
let getNestedRandomArray = (start, end, size, nArray)=>{
    const array=[];
    for(let i=0;i<nArray;i++){
        array.push(randonGen(start,end,size));
    }
    return array;
}
let getRandomWords = (n)=>{
    let words = '';
    for(let i=0;i<n;i++){
        words+=(`Word${Math.round(Math.random() * 10)}, `);
    }
    return words;
}
let chordchartData = [
    {
      text: 'Dallas',
      values: [2950, 5700, 4789, 2771],
      style: {
        band: {
          alpha: 1,
          backgroundColor: 'blue'
        },
        label: {
          bold: true,
          fontFamily: 'arial',
          fontSize: '14px'
        }
      }
    },
    {
      text: 'Chicago',
      values: [7737, 5205, 2202, 7006],
      style: {
        band: {
          aplpha: 1,
          backgroundColor: 'lightgrey'
        },
        label: {
          bold: true,
          fontFamily: 'arial',
          fontSize: '14px'
        }
      }
    },
    {
      text: 'Atlanta',
      values: [5574, 9898, 1685, 2765],
      style: {
        band: {
          alpha: 1,
          backgroundColor: 'lightblue'
        },
        label: {
          bold: true,
          fontFamily: 'arial',
          fontSize: '14px'
        }
      }
    },
    {
      text: 'Denver',
      values: [5309, 1602, 8395, 4111],
      style: {
        band: {
          alpha: 1,
          backgroundColor: 'grey'
        },
        label: {
          bold: true,
          fontFamily: 'arial',
          fontSize: '14px'
        }
      }
    }
  ]
   
  let chordchartConfig = {
    type: 'chord',
    backgroundColor: '#FFFFFF',
    title: {
        visible: false,
    },
    legend: {
        visible: false
    },
    options: {
      anglePadding: 5,
      bandSpace: 3,
      colorType: 'palette',
      palette: ['blue', 'lightgrey', 'lightblue', 'grey'],
      radius: 140
    },
    plotarea: {
    //   margin: '25px 40px 15px 40px'
    },
    series: chordchartData
  };

  let scatteredchatData = [
    {
      text: 'Female',
      values: [[161.2, 51.6], [167.5, 59], [159.5, 49.2], [157, 63], [155.8, 53.6], [170, 59], [159.1, 47.6], [166, 69.8], [176.2, 66.8], [160.2, 75.2], [172.5, 55.2], [170.9, 54.2], [172.9, 62.5], [153.4, 42], [160, 50], [147.2, 49.8], [168.2, 49.2], [175, 73.2], [157, 47.8], [167.6, 68.8], [159.5, 50.6], [175, 82.5], [166.8, 57.2], [176.5, 87.8], [170.2, 72.8], [174, 54.5], [173, 59.8], [179.9, 67.3], [170.5, 67.8], [160, 47], [154.4, 46.2], [162, 55], [176.5, 83], [160, 54.4], [152, 45.8], [162.1, 53.6], [170, 73.2], [160.2, 52.1], [161.3, 67.9], [166.4, 56.6], [168.9, 62.3], [163.8, 58.5], [167.6, 54.5], [160, 50.2], [161.3, 60.3], [167.6, 58.3], [165.1, 56.2], [160, 50.2], [170, 72.9], [157.5, 59.8], [167.6, 61], [160.7, 69.1], [163.2, 55.9], [152.4, 46.5], [157.5, 54.3], [168.3, 54.8], [180.3, 60.7], [165.5, 60], [165, 62], [164.5, 60.3]],
      tooltip: {
        text: '%k / %v',
        padding: '10px',
        alpha: 0.8,
        backgroundColor: '#FFF',
        borderColor: 'grey',
        borderRadius: '8px',
        borderWidth: '2px',
        color: 'grey',
        textAlign: 'left'
      },
      marker: {
        type: 'circle',
        backgroundColor: 'grey',
        borderColor: '#fff',
        borderWidth: '1px',
        shadow: false
      }
    },
    {
      text: 'Male',
      values: [[174, 65.6], [175.3, 71.8], [193.5, 80.7], [186.5, 72.6], [187.2, 78.8], [181.5, 74.8], [184, 86.4], [184.5, 78.4], [175, 62], [184, 81.6], [180, 76.6], [177.8, 83.6], [192, 90], [176, 74.6], [174, 71], [184, 79.6], [192.7, 93.8], [171.5, 70], [173, 72.4], [176, 85.9], [176, 78.8], [180.5, 77.8], [172.7, 66.2], [176, 86.4], [173.5, 81.8], [178, 89.6], [180.3, 82.8], [180.3, 76.4], [164.5, 63.2], [173, 60.9], [183.5, 74.8], [175.5, 70], [188, 72.4], [189.2, 84.1], [172.8, 69.1], [170, 59.5], [182, 67.2], [170, 61.3], [177.8, 68.6], [184.2, 80.1], [186.7, 87.8], [171.4, 84.7], [172.7, 73.4], [175.3, 72.1], [180.3, 82.6], [182.9, 88.7], [188, 84.1], [177.2, 94.1], [172.1, 74.9], [167, 59.1], [169.5, 75.6], [174, 86.2], [172.7, 75.3], [182.2, 87.1], [164.1, 55.2]],
      tooltip: {
        text: '%k / %v',
        padding: '10px',
        alpha: 0.8,
        backgroundColor: '#FFF',
        borderColor: '#4c77ba',
        borderRadius: '8px',
        borderWidth: '2px',
        color: '#4c77ba',
        textAlign: 'left'
      },
      marker: {
        type: 'circle',
        backgroundColor: '#4c77ba',
        borderColor: '#fff',
        borderWidth: '1px',
        shadow: false
      }
    }
  ];
   
  let scatteredchatConfig = {
    type: 'scatter',
    theme: 'classic',
    backgroundColor: '#fff #fbfbfb',
    title: {
        visible: false
    },
    legend: {
      visible:false
    },
    plot: {
      selectedMarker: {
        type: 'star5',
        backgroundColor: '#00a679',
        borderColor: '#00a679',
        borderWidth: '1px',
        size: '6px'
      },
      selectionMode: 'multiple'
    },
    plotarea: {
      margin: '60px 40px dynamic dynamic'
    },
    scaleX: {
        visible:false,
        
      itemsOverlap: true,
      label: {
        visible:false,
        text: 'Height (cm)'
      },
      maxItems: 16,
      offsetStart: '20px',
      offsetEnd: '20px'
    },
    scaleY: {
        visible:false,
      label: {
        visible:false,
        text: 'Weight (Kg)'
      },
      minValue: 'auto',
      offsetStart: '20px',
      offsetEnd: '20px'
    },
    labels: [
      {
        visible:false,
        text: 'Selected',
        bold: true,
        fontSize: '11px',
        x: '91%',
        y: '23%'
      }
    ],
    shapes: [
      {
        visible:false,
        type: 'star5',
        backgroundColor: '#00a679',
        size: '6px',
        x: '89%',
        y: '24.6%'
      }
    ],
    series: scatteredchatData
  };

  let wordcountchartConfig = {
    type: 'wordcloud',
    options: {
      text: 'word1, word2, word3, word4, word5, word6, word7, ',
      aspect: 'spiral',
      colorType: 'palette',
      ignore: ['establish', 'this'],
      maxItems: 50,
      minLength: '4px',
      palette: ['#D32F2F', '#1976D2', '#9E9E9E', '#E53935', '#1E88E5', '#7E57C2', '#F44336', '#2196F3', '#A1887F'],
      rotate: true,
      style: {
        tooltip: {
            // visible: false,
          text: 'We the people of the United States, in order to form a more perfect union, establish justice, insure domestic tranquility, provide for the common defense, promote the general welfare, and secure the blessings of liberty to ourselves and our posterity, do ordain and establish this Constitution for the United States of America.',
          padding: '5px',
          alpha: 0.9,
          backgroundColor: '#D32F2F',
          borderColor: 'none',
          borderRadius: '3px',
          fontColor: 'white',
          fontFamily: 'Georgia',
          textAlpha: 1,
          visible: false,
          width: '400px',
          wrapText: true
        },
        fontFamily: 'Merriweather',
        hoverState: {
          backgroundColor: '#1976D2',
          borderColor: 'none',
          borderRadius: '3px',
          fontColor: 'white'
        }
      }
    }
  };

  let oceanchartConfig = {
    type: 'range',
    backgroundColor: '#ffffff',
    guide: {
      marker: {
        type: 'triangle',
        size: '7px'
      },
      plotLabel: {
        text: '<span style="color:%color">%t</span>',
        backgroundColor: '#000',
        borderRadius: '5px',
        fontColor: '#FFF',
        fontSize: '15px',
        headerText: '%kt'
      }
    },
    title: {
      visible: false,
      text: 'Average Temperature',
      backgroundColor: '#ffffff',
      fontColor: '#000'
    },
    legend: {
        visible: false,
      align: 'center',
      backgroundColor: '#e0e0e0',
      borderColor: '#fff',
      layout: 'x4',
      shadow: false,
      verticalAlign: 'bottom'
    },
    plot: {
      alphaArea: 1,
      aspect: 'spline',
      hoverState: {
        backgroundColor: 'none'
      },
      lineWidth: '0px',
      marker: {
        visible: false
      }
    },
    scaleX: {
      guide: {
        alpha: 1,
        lineStyle: 'solid',
        lineWidth: '1px'
      },
      item: {
        offsetX: '0px',
        textAlign: 'left'
      },
      label: {
        text: 'Year'
      },
      labels: ['01/2020', '02/2020', '03/2020', '04/2020', '05/2020', '06/2020'],
      lineWidth: '1px',
      tick: {
        lineWidth: '1px',
        placement: 'outer',
        size: '10px'
      }
    },
    scaleY: {
      label: {
        text: 'Celsius'
      },
      lineWidth: '1px',
      tick: {
        lineWidth: '1px'
      }
    },
    tooltip: {
      visible: false
    },
    series: [
      {
        text: 'Pacific Ocean',
        values: [[5, 12], [2, 10], [6, 14], [4, 14], [5, 16], [6, 15]],
        backgroundColor: 'dodgerblue',
        lineColor: 'dodgerblue'
      },
      {
        text: 'Atlantic Ocean',
        values: [[6, 10], [4, 6], [7, 13], [6, 12], [8, 14], [6, 14]],
        backgroundColor: 'lightgrey',
        lineColor: 'lightgrey'
      },
      {
        text: 'Southern Ocean',
        values: [[7, 8], [4, 6], [8, 9], [6, 12], [9, 12], [6, 14]],
        backgroundColor: '#ccfff9',
        lineColor: '#ccfff9'
      },
      {
        text: 'Indian Ocean',
        values: [[7, 8], [4, 5], [8, 9], [6, 8], [9, 11], [9, 13]],
        backgroundColor: '#8bdceb',
        lineColor: '#8bdceb'
      }
    ]
  }

  $('.topic').click(function(){
    let keyword = $(this).text();
    $('.keyword').text(keyword);
  });
  

  $('.btn-remove').click(function(){
      $(this).parent().remove();
  });
  let keywords = ['Topic 1', 'Topic 2', 'Topic 3'];
  let changeTopic = ()=>{
    scatteredchatData.map(data=>{
        data.values = getNestedRandomArray(10,200,2, 20);
    });
    wordcountchartConfig.options.text = getRandomWords(20);
    chordchartData.map(data=>{
        data.values = randonGen(1000, 9000, 4);
    });
    zingchart.render({ 
      id: 'wordcountchat',
      data: wordcountchartConfig
    });
    zingchart.render({
      id: 'scatteredchat',
      data: scatteredchatConfig
    });
    setTimeout(function(){
        zingchart.render({
          id: 'chordchat',
          data: chordchartConfig
        });
    }, 500)
  };
  let newkeyword =(keyword)=>{
    let table = $('#keyword-table');
    let clone = $('.keyword-clone').clone();
    clone.removeClass('d-none');
    clone.removeClass('keyword-clone');
    clone.find('.topic').text(keyword);
    clone.find('.topic').click(function(){
        changeTopic();
        let keyword = $(this).text();
        $('.keyword').text(keyword);
        let rows = $('.keyword-row');
        rows.removeClass('active-keyword');
        clone.addClass('active-keyword');
    });
    clone.find('.btn-remove').click(function(){
        $(this).parent().remove();
    });
    table.append(clone);  
  }

  $('.add-keyword').click(function(){
    let keyword = $('#form-keyword').val();
    if (keyword){
        newkeyword(keyword);
    }
  });
  $("#form-keyword").keyup(function(event) {
      event.preventDefault();
      let keyword = $('#form-keyword').val();
    if (event.keyCode === 13 && keyword) {
        newkeyword(keyword);
    }
  });

  $( document ).ready(function() {
    zingchart.render({
      id: 'oceanchat',
      data: oceanchartConfig
    });
    keywords.forEach(keyword=>{
      newkeyword(keyword);
    });
    $('.topic').click()
});