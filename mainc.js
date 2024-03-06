if(this.table.rowManager.element.scrollHeight > this.table.rowManager.element.clientHeight){
			totalWidth -= this.table.rowManager.element.offsetWidth - this.table.rowManager.element.clientWidth;
		}
		
		this.columnsByIndex.forEach(function(column){
			var width, minWidth, colWidth;
			
			if(column.visible){
				
				width = column.definition.width || 0;
				
				minWidth = parseInt(column.minWidth);

      if(typeof(width) == "string"){
					if(width.indexOf("%") > -1){
						colWidth = (totalWidth / 100) * parseInt(width) ;
					}else{
						colWidth = parseInt(width);
					}
				}else{
					colWidth = width;
				}
				
				fixedWidth += colWidth > minWidth ? colWidth : minWidth;
				
			}
		});
