$(document).ready(function() {
                // URL에서 location 값을 가져옴
                const urlParams = new URLSearchParams(window.location.search);
                const location = urlParams.get('location');
              
                // tour.xml 파일에서 이미지 정보를 가져옴
                $.ajax({
                  type: "GET",
                  url: "tour.xml",
                  dataType: "xml",
                  success: function(xml) {
                    $(xml).find('location').each(function() {
                      if ($(this).attr('name') === location) {
                        $(this).find('image').each(function() {
                          const imageUrl = $(this).attr('url');
                          const imageTitle = $(this).attr('title');
                          const imageDescription = $(this).text();
              
                          // 이미지를 추가함
                          const imageHtml = `
                            <div class="col-md-4">
                              <a href="${imageUrl}" data-lightbox="image" data-title="${imageTitle}">
                                <img src="${imageUrl}" alt="${imageTitle}" class="img-thumbnail">
                              </a>
                            </div>
                          `;
                          $('#image-list').append(imageHtml);
                        });
                      }
                    });
                  },
                  error: function() {
                    alert("An error occurred while processing XML file.");
                  }
                });
              });