$(document).ready(function(){

    const SUBMENU_DESTAQUES = [
        {
            indice: 'produtos',
            src_img: './src/assets/img/molas/bobina.jpg',
            description: `
                <h4>Produtos</h4>
                <hr>
                <p>
                    Produzimos com qualidade os mais variados produtos 
                </p>
            `
        },
        {
            indice: 'qualidade',
            src_img: './src/assets/img/teste/qualidade.jpg',
            description: `
                <h4>Qualidade</h4>
                <hr>
                <p>
                    Qualidade-ISO-9001:2015 Validade da Certificacao ate 22/08/2024) /IATF 16949:2016 (Suspenso Temporariamente )
                    A Sankar possui certificacao no sistema de gestao da qualidade na norma ISO 9001:2015 pela certificadora DQS. 
                </p>
            `
        },
        {
            indice: 'maquinas',
            src_img: './src/assets/img/maquinas/maquinas_9.jpg',
            description: `                
                <h4><a href="./maquinas" style="color: #335783;">Máquinas</a></h4>
                <hr>
                <p>
                    Confira as máquinas que trabalhamos para garantir a qualidade do produto
                </p>
            `
        },
        {
            indice: 'localizacao',
            src_img: './src/assets/img/edificio/header.jpeg',
            description: `
                <h4>Sankar Indústria e Comércio de Molas Ltda</h4>
                <hr>
                <p>
                    Av. Sargento Geraldo Santana,</br>766</br> 
                    Cep 04674-225</br> Jd. Taquaral São Paulo - SP
                </p>
            `
        }
    ];

    const SUBMENU_AREAS = [
        {
            indice: 'hospitalar',
            src_img: './src/assets/img/areas/hospitalar.jpg',
            description: `
                <h4>Hospitalar</h4>
                <hr>
                <p>
                    Texto para hospitalar. 
                </p>
            `
        },
        {
            indice: 'automotiva',
            src_img: './src/assets/img/areas/automotiva.jpg',
            description: `
                <h4>Automotiva</h4>
                <hr>
                <p>
                    Texto para automotiva
                </p>
            `
        },
        {
            indice: 'petroquimica',
            src_img: './src/assets/img/areas/petroquimica.jpg',
            description: `
                <h4>Petroquímica</h4>
                <hr>
                <p>
                    Texto para petroquimica
                </p>
            `
        },
        {
            indice: 'telecominicacoes',
            src_img: './src/assets/img/areas/rede.jpg',
            description: `
                <h4>Telecomunicações</h4>
                <hr>
                <p>
                    Texto para telecomunicações
                </p>
            `
        }
    ];

    const ARRAY_SIZE = SUBMENU_DESTAQUES.length;

    let i = 1;
    let interval;
    beginLoop();
    
    function beginLoop(){       
        interval = setInterval(() => {

            if (i == 0) {
                $(`#sub_item_destaques_${SUBMENU_DESTAQUES[3].indice}`).removeClass('checked');
                $(`#sub_item_areas_${SUBMENU_AREAS[3].indice}`).removeClass('checked');    
            } else {
                $(`#sub_item_destaques_${SUBMENU_DESTAQUES[i - 1].indice}`).removeClass('checked');
                $(`#sub_item_areas_${SUBMENU_AREAS[i - 1].indice}`).removeClass('checked');
            }
            
            $(`#sub_item_destaques_${SUBMENU_DESTAQUES[i].indice}`).addClass('checked');
            $(`#sub_item_areas_${SUBMENU_AREAS[i].indice}`).addClass('checked');

            $('.main_section___slides--slide').css("background", `url('${SUBMENU_DESTAQUES[i].src_img}') no-repeat center/cover`);
            $('.main_section___slides--description').html(SUBMENU_DESTAQUES[i].description);

            $('.main_section_areas__slides--slide').css("background", `url('${SUBMENU_AREAS[i].src_img}') no-repeat center/cover`);
            $('.main_section_areas__slides--description').html(SUBMENU_AREAS[i].description);

            if (i == (ARRAY_SIZE - 1)) {
                i = 0;
            } else {
                i++;
            }

        }, 4000);
    }

    $('.main_section___nav a').on('mouseenter', (e)=> {

        clearInterval(interval);

        switch (e.target.id) {
            case 'sub_item_destaques_produtos':
                $(`#sub_item_destaques_${SUBMENU_DESTAQUES[i].indice}`).removeClass('checked');
                $('.main_section___slides--slide').css("background", `url('${SUBMENU_DESTAQUES[0].src_img}') no-repeat center/cover`);
                $('.main_section___slides--description').html(SUBMENU_DESTAQUES[0].description);
                break;

            case 'sub_item_destaques_qualidade':
                $(`#sub_item_destaques_${SUBMENU_DESTAQUES[i].indice}`).removeClass('checked');
                $('.main_section___slides--slide').css("background", `url('${SUBMENU_DESTAQUES[1].src_img}') no-repeat center/cover`);
                $('.main_section___slides--description').html(SUBMENU_DESTAQUES[1].description);
                break;

            case 'sub_item_destaques_maquinas':
                $(`#sub_item_destaques_${SUBMENU_DESTAQUES[i].indice}`).removeClass('checked');
                $('.main_section___slides--slide').css("background", `url('${SUBMENU_DESTAQUES[2].src_img}') no-repeat center/cover`);
                $('.main_section___slides--description').html(SUBMENU_DESTAQUES[2].description);
                break;

            case 'sub_item_destaques_localizacao':
                $(`#sub_item_destaques_${SUBMENU_DESTAQUES[i].indice}`).removeClass('checked');
                $('.main_section___slides--slide').css("background", `url('${SUBMENU_DESTAQUES[3].src_img}') no-repeat center/cover`);
                $('.main_section___slides--description').html(SUBMENU_DESTAQUES[3].description);
                break;

            case 'sub_item_areas_hospitalar':
                $(`#sub_item_areas_${SUBMENU_AREAS[i].indice}`).removeClass('checked');
                $('.main_section_areas__slides--slide').css("background", `url('${SUBMENU_AREAS[0].src_img}') no-repeat center/cover`);
                $('.main_section_areas__slides--description').html(SUBMENU_AREAS[0].description);
                break;

            case 'sub_item_areas_automotiva':
                $(`#sub_item_areas_${SUBMENU_AREAS[i].indice}`).removeClass('checked');
                $('.main_section_areas__slides--slide').css("background", `url('${SUBMENU_AREAS[1].src_img}') no-repeat center/cover`);
                $('.main_section_areas__slides--description').html(SUBMENU_AREAS[1].description);
                break;

            case 'sub_item_areas_petroquimica':
                $(`#sub_item_areas_${SUBMENU_AREAS[i].indice}`).removeClass('checked');
                $('.main_section_areas__slides--slide').css("background", `url('${SUBMENU_AREAS[2].src_img}') no-repeat center/cover`);
                $('.main_section_areas__slides--description').html(SUBMENU_AREAS[2].description);
                break;

            case 'sub_item_areas_telecominicacoes':
                $(`#sub_item_areas_${SUBMENU_AREAS[i].indice}`).removeClass('checked');
                $('.main_section_areas__slides--slide').css("background", `url('${SUBMENU_AREAS[3].src_img}') no-repeat center/cover`);
                $('.main_section_areas__slides--description').html(SUBMENU_AREAS[3].description);
                break;
        
            default:
                break;
        }
    });

    $('.main_section___nav').on('mouseleave', ()=> {
        beginLoop();
    })


});