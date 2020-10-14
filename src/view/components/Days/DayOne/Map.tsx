import React from 'react';
import './Map.scss';

interface IMapProps {

}

const Map : React.FC<IMapProps> = props => {
    return (
        <svg className={`map-day-one`} viewBox="0 0 200.00001 300">
            <g id="layer1" transform="translate(0.12342899,7.08221)" className={`animated`}>
                <path
                    id="path1051"
                    style={{fill: "#000000", strokeWidth: "0.264583"}}
                    d="m 144.44475,287.5061 c 1.04717,-0.80334 -2.00309,-4.40727 1.05839,-0.24016 l -0.47167,0.39853 z m 0.6835,-4.49675 c -5.70827,-4.50271 6.68783,-2.28698 0,0 z m 0.8599,-2.20601 c -2.08122,-0.93541 -0.18686,0.70442 0,0 z m -10.04745,1.39498 c -1.82134,-6.25971 -16.89002,-2.04875 -11.12388,-9.48587 3.06767,-5.0001 -6.54012,-4.19984 -5.60341,-7.18882 -3.37075,2.49574 -4.57812,-2.5394 -6.69323,-1.93673 -3.30734,-2.05576 -9.72986,-0.93586 -11.86344,-5.04338 -5.990396,0.71858 -2.837987,-4.81302 -9.687609,-2.96285 5.366777,-5.98681 -10.580382,-4.19116 -5.974102,-8.76826 -3.681536,-1.8857 -0.688167,-14.16791 3.030816,-11.16361 6.896713,-0.0557 7.212653,-6.43542 12.495715,-8.50211 -6.11845,1.57582 -10.959328,-7.17688 -15.472838,-2.47088 -5.537579,-0.51612 1.628937,-10.75168 -7.070351,-4.89872 -4.838206,2.79902 -5.868976,-2.80273 -10.387469,-2.77934 1.906698,-1.94352 6.740126,-1.13266 7.922449,-4.25908 3.124626,-2.30512 -4.524034,-7.61943 2.164457,-5.62868 0.762695,-2.90871 9.599622,-3.98489 1.597427,-7.66266 8.131625,0.67733 1.742871,-6.88725 6.172577,-9.4048 -4.606719,-9.75728 -6.099638,0.43752 -14.204267,-0.80227 -7.631614,0.58543 -11.799445,3.06141 -9.132169,-5.53898 -8.958487,-7.02294 6.954194,-4.69327 6.141216,-9.07053 -4.132737,-5.68756 7.224652,-7.98738 10.233199,-9.58259 -2.93242,-2.64035 -4.569138,-9.36955 -6.984991,-10.70901 -4.754755,2.96793 -7.484253,-6.76811 -13.616677,-3.28854 4.571004,-6.34935 -8.759366,-1.45378 0.220121,-6.3689 -0.264142,-0.80944 -5.526054,-1.6559 -0.639808,-3.6167 -0.388182,-5.15742 -0.938578,-6.79625 -5.189574,-9.31763 4.972735,-2.34225 18.169314,-2.2366 18.927463,-7.02352 -2.984421,-4.89469 -9.090279,-3.86985 -11.449743,-7.13703 6.980166,-3.11414 -1.409825,-8.1991 -4.686051,-1.99057 -0.969186,-2.70197 -4.246722,-10.79139 1.467456,-7.7088 2.555006,-2.64738 4.668227,-2.71485 4.632764,-7.56837 5.331234,0.39982 7.132356,-0.563725 5.72997,-4.832211 3.614287,-1.403923 3.372727,-5.05648 -0.486115,-5.6476 -0.444436,-6.424675 6.344262,-7.616298 7.774763,-9.491474 0.479542,-2.66329 0.809366,-14.15489 3.052066,-5.789763 4.05118,-2.43746 8.268048,5.108001 8.537673,-3.412612 0.139794,-4.017717 4.643738,-3.698889 8.631232,-4.390023 0.650418,-1.470926 5.86384,-4.618967 8.749,-6.04036 5.42015,3.60114 18.08002,-1.077738 15.95528,-8.94528 3.00704,-2.074877 4.34758,-4.324754 7.69515,-5.936683 6.47052,-1.988565 11.0608,0.731822 14.33657,-6.36e-4 4.52091,0.559268 5.22133,8.444466 8.32408,8.829655 6.23574,-6.640676 8.12244,-18.202712 2.12235,-26.078675 -0.13034,-3.58901 4.93289,-4.987953 1.23965,-10.636379 2.19889,-3.981323 6.16335,-8.2768094 2.39851,-13.0365444 -1.04532,-5.38867601 2.88035,-9.7667641 9.54788,-8.0063804 7.59772,0.2339002 5.51234,9.0081479 7.45146,14.6025138 -0.26839,9.08769 5.68758,19.047302 0.52682,27.519014 -1.44777,8.15053 -6.15107,18.639012 0.32659,24.987279 7.72558,7.973006 7.52436,18.522795 8.19434,28.948333 -0.87041,11.629716 0.50702,22.985676 2.29653,34.345536 -1.8742,10.50149 3.51349,23.2224 -4.3726,31.92358 -0.997,1.6755 -5.46831,8.31493 -6.83185,11.02588 -8.14789,7.87573 -8.58544,17.48879 -8.60528,27.86467 -1.05439,8.64487 0.73372,15.32058 0.13424,23.87333 1.09114,4.64516 -6.89957,6.39474 -1.28202,7.97777 0.0474,3.62426 -5.78213,5.88127 -5.11645,7.02738 -0.88378,5.85532 -6.88804,-2.06796 -6.92087,2.79331 -1.52375,-0.83892 -3.13643,8.36592 1.2055,1.65364 3.94962,-0.99765 10.59673,0.0974 5.18615,5.48682 -3.94198,4.40506 -10.34375,6.11412 -10.21595,11.52814 7.50262,5.44874 -7.98621,8.61852 -6.16388,15.22172 -0.89038,1.15932 9.13411,-6.33368 3.67989,1.04527 -3.26997,2.52518 -2.38525,9.11108 -8.32673,7.47001 z m 0.58308,-0.49651 c -1.0477,-0.55601 -0.24722,0.59621 0,0 z m 2.45291,-0.60497 c 2.97613,-3.5762 9.63654,-14.09911 1.38673,-5.70922 -1.31801,-2.27249 -2.30869,-8.17124 3.04505,-8.62629 3.23065,-3.18432 5.72482,-6.70713 2.59281,-8.62145 -0.60189,-4.47696 4.23274,-8.32457 9.79801,-10.27286 3.42214,-5.55085 2.04674,-6.22346 -3.88322,-5.50869 -8.41777,8.77553 -3.17815,-9.44596 1.26415,-3.91272 3.73436,-0.381 3.72616,-4.11243 7.30439,-6.91632 -2.4267,-4.82734 6.06887,-11.68263 2.45873,-18.98022 -0.60563,-8.06589 -1.07962,-18.40011 1.56861,-27.0457 -1.029,-10.69212 10.44409,-17.62161 14.35158,-27.01868 7.20955,-9.04874 1.78808,-21.35453 3.924,-31.8563 -0.80998,-9.62751 -4.74499,-19.34761 -2.07457,-29.288579 -1.99452,-10.987404 1.20724,-23.558925 -7.98109,-32.199559 -7.50501,-8.820783 -2.80166,-20.790166 1.09846,-30.071146 -0.0228,-8.301928 -2.0823,-16.169742 -2.96972,-24.33057 -2.01805,-5.0205811 0.495,-9.78126902 -4.50485,-13.1422421 -7.50547,-1.59363 -13.3061,3.4495015 -8.36409,10.8629789 1.33828,5.4688602 -7.62011,8.6026172 -2.60738,14.1106482 -6.85675,6.958211 4.0925,14.574798 0.4928,23.358645 -3.78338,5.0321 -5.04648,16.363619 -10.53575,5.745524 -3.27818,-6.194316 -10.06434,-6.061728 -16.82106,-5.146297 -6.73908,1.614833 -8.81095,7.902999 -10.22369,12.670151 -6.45833,4.716504 -14.53333,3.041798 -20.484628,5.04758 -2.286791,5.00342 -10.584604,2.05681 -11.108651,7.628555 0.721365,11.743309 -14.96731,-2.934409 -10.505259,3.90785 0.464047,5.155865 -1.800949,7.980009 -6.911118,8.060683 -0.780018,5.513918 -3.100911,5.750993 1.658739,7.588279 -3.402551,5.109085 -1.28788,10.964699 -9.215182,10.129729 2.762687,7.54943 -10.547326,4.25344 -6.564165,10.96766 -0.322161,3.53415 8.076352,-4.93078 9.146518,2.18281 -8.700396,6.13915 5.6386,2.79695 6.81327,8.92969 6.10082,8.27203 -18.73564,3.88769 -13.906087,10.58333 0.842507,2.72716 1.331647,9.28114 0.322922,8.68478 2.723436,1.24205 1.764986,7.65048 8.276035,8.62526 3.059775,4.59695 9.415827,-1.3677 9.217906,6.50018 5.303666,4.51591 5.097375,10.0895 -3.129485,10.51495 -7.277966,1.77245 1.438739,12.02004 -8.80476,9.80262 -6.954786,0.97356 4.000582,6.27942 -0.787084,10.45873 4.941263,-0.52337 15.982686,1.28659 15.180997,-5.35544 6.339193,1.18812 10.865312,6.36708 7.370796,12.05588 0.637867,4.66603 -3.583082,4.02142 -0.990553,7.37578 -1.290141,5.97895 -11.751597,2.55825 -6.35745,8.15049 -1.039268,6.60785 -15.408368,4.87809 -3.691688,6.4119 0.583412,6.22574 13.87059,-5.35023 9.784547,5.04012 5.040548,-0.56805 12.601243,2.9833 17.79323,4.55272 1.59893,5.67426 -4.819615,-0.83039 -5.742149,6.85068 -7.514099,3.42673 -10.689718,-0.22747 -11.693733,9.53384 3.842164,2.87407 -0.09243,6.44731 5.959352,7.09894 7.27681,-1.42713 -1.872859,8.25921 5.924585,3.8194 2.559566,5.3825 7.980665,4.10448 13.271615,7.45501 4.54045,-1.78595 7.18953,6.4178 11.50692,0.80284 2.68637,-0.32833 -2.0577,8.93614 3.71044,4.40353 4.90788,1.40243 0.25077,5.45726 -0.0712,9.59607 5.02705,0.1075 9.52637,-1.71513 10.75665,4.72914 1.31897,-0.0309 2.64224,0.01 3.94873,-0.23469 z m -32.36736,-42.00948 c -0.57744,-3.98324 3.87549,0.61023 0,0 z m 70.30558,-83.28109 c 0.56264,-3.87818 2.8452,1.59744 0,0 z m -45.56814,-34.77909 c -1.22047,-3.73533 3.48748,0.40847 0,0 z m 2.07367,157.82417 c -0.89409,-1.07333 -1.25108,-0.73077 0,0 z m -9.45108,-2.02727 c -0.7602,-1.56135 0.33546,1.82243 0,0 z m 4.15941,0.0105 c -1.27956,-1.91395 0.68024,1.88067 0,0 z m -1.52135,-0.17524 c -1.45702,-0.42946 -0.26443,0.4631 0,0 z m 18.37084,-3.31396 c -0.50933,0.11477 0.37905,1.15979 0,0 z m -2.41305,-0.5457 c 2.78682,-3.10923 -3.06852,3.09645 0,0 z m -2.53019,-3.49012 c -0.63312,-0.90339 -1.07116,0.5068 0,0 z m -19.92759,-2.84334 c -0.50933,0.11475 0.37901,1.15976 0,0 z m 0.41165,-1.133 c -0.12213,-1.91886 -0.46654,2.27229 0,0 z m -1.08781,-0.60333 c 0.91822,-1.12768 -1.72896,1.36439 0,0 z m 1.46556,-1.56126 c -0.46768,-0.64961 -0.96528,1.15193 0,0 z m 27.28918,-0.76086 c -0.74881,0.51151 -0.31425,1.15085 0,0 z m -41.82473,-2.13722 c -1.04769,-0.55602 -0.24722,0.59622 0,0 z m -6.736327,-2.65951 c -1.763527,-0.48273 -0.317759,0.48053 0,0 z m 48.528307,-1.72815 c -0.50933,0.11477 0.37905,1.15979 0,0 z m -55.550312,-0.11025 c -1.047696,-0.55602 -0.247221,0.59622 0,0 z m -0.688343,-1.62608 c 0.918207,-1.12766 -1.728963,1.36439 0,0 z m -0.496771,-3.15179 c -1.457013,-0.42946 -0.264428,0.46311 0,0 z m -4.233333,-1.5875 c -1.457013,-0.42946 -0.264428,0.46311 0,0 z m -2.795823,-1.19729 c -0.509326,0.11474 0.379012,1.15974 0,0 z m 72.225742,-1.33946 c -0.46307,0.26443 0.42943,1.45702 0,0 z m -71.696575,-2.36471 c -0.509328,0.11475 0.379016,1.15977 0,0 z m 71.852075,-1.9777 c -1.45702,-0.42943 -0.26443,0.46307 0,0 z m -2.25447,-1.30754 c -1.04767,-0.55602 -0.24728,0.59618 0,0 z m -65.148136,-5.3964 c 1.35355,-1.89239 -1.974485,1.92421 0,0 z m 4.293967,-2.27652 c -1.047665,-0.55601 -0.247275,0.59617 0,0 z m 2.628136,-3.34588 c -0.463082,0.26443 0.429439,1.45702 0,0 z m 65.044563,-0.46302 c -2.08124,-0.93542 -0.18683,0.70444 0,0 z m 0.69429,-0.33514 c -0.87937,-0.6848 0.83664,1.44316 0,0 z M 99.217531,226.4039 c -1.047665,-0.55601 -0.247275,0.59617 0,0 z m -6.085416,-1.05833 c -1.047667,-0.55602 -0.247275,0.59617 0,0 z m 70.105015,-1.62105 c -0.43879,0.33873 0.3917,1.74389 0,0 z m 0.25646,-4.89983 c -0.46311,0.26443 0.42946,1.45702 0,0 z m -89.559832,-0.78887 c -0.855589,-0.33872 0.957562,1.71953 0,0 z m 9.287028,-0.37687 c -1.763551,-0.48269 -0.317728,0.48049 0,0 z m -13.498785,-2.11834 c -1.457014,-0.42943 -0.264432,0.46307 0,0 z m 4.624697,-1.04296 c -1.047668,-0.55601 -0.247274,0.59617 0,0 z m 1.956573,-5.20237 c -0.87937,-0.6848 0.836647,1.44316 0,0 z m 1.096682,-1.6905 c -1.763551,-0.48269 -0.317728,0.48049 0,0 z m 0.903308,-0.6698 c -0.509323,0.11474 0.379011,1.15974 0,0 z m 85.463029,-4.64171 c -0.43877,0.33874 0.39171,1.74389 0,0 z m -0.26719,-1.97288 c -0.50932,0.11476 0.37901,1.15976 0,0 z m -82.995328,-0.0544 c -0.120585,-0.71044 -1.564574,0.23714 0,0 z m 3.367926,-1.1142 c -1.047668,-0.55601 -0.247274,0.59617 0,0 z m 79.365432,-1.09189 c -0.43879,0.33873 0.3917,1.74389 0,0 z m -0.001,-6.61962 c -0.42558,0.39346 0.41175,2.04934 0,0 z m -96.826872,-2.87183 c -1.047686,-0.55601 -0.247246,0.59618 0,0 z m 10.953324,-0.83233 c 0.918219,-1.12768 -1.72896,1.36438 0,0 z m 87.453978,-0.92604 c -0.46307,0.26443 0.42943,1.457 0,0 z m 0.2701,-2.10013 c -0.50932,0.11474 0.379,1.15975 0,0 z M 62.440447,183.27682 c -1.047665,-0.55601 -0.247275,0.59617 0,0 z m 6.866981,-8.35643 c -0.509325,0.11475 0.379015,1.15976 0,0 z m 99.699472,-0.74414 c 1.35355,-1.89237 -1.97448,1.9242 0,0 z M 67.455345,171.74539 c -0.509329,0.11476 0.379026,1.15976 0,0 z M 79.0915,164.05594 c -0.463082,0.26443 0.429439,1.45702 0,0 z m -3.439583,-3.43958 c -0.463084,0.26443 0.42944,1.457 0,0 z m -9.242719,-8.56038 c -1.047686,-0.55601 -0.247246,0.59618 0,0 z m -3.421814,-1.15103 c -1.363699,-1.55503 0.970832,1.73967 0,0 z m 120.085366,-0.60734 c -0.46307,0.26443 0.42943,1.457 0,0 z M 59.767242,149.71102 c 0.195327,-2.19472 -2.538187,2.02851 0,0 z m 1.59228,-0.0865 c -2.30895,0.0747 0.88285,0.486 0,0 z m -3.416991,-3.12475 c -1.047682,-0.55601 -0.247247,0.59618 0,0 z m 124.865639,-2.81671 c -0.46307,0.26443 0.42943,1.45702 0,0 z m -124.865639,-1.6812 c -1.047664,-0.55602 -0.247275,0.59617 0,0 z m 125.130219,-0.70005 c -0.46307,0.26443 0.42943,1.45702 0,0 z M 57.932959,137.73493 c -0.438741,0.33863 0.391571,1.74383 0,0 z m 125.145301,-0.64995 c -0.50933,0.11475 0.37904,1.15975 0,0 z m -128.419573,-4.356 c -0.751081,-1.82528 -2.549204,-0.40768 0,0 z m 128.161383,-3.06579 c -0.4084,0.48007 0.3845,2.32014 0,0 z M 64.959501,129.02186 c -1.457014,-0.42943 -0.264432,0.46307 0,0 z m 118.654319,-4.38575 c -0.4084,0.48008 0.3845,2.32014 0,0 z M 69.104641,121.71388 c -1.132276,-1.24118 -1.257851,-0.2105 0,0 z m 113.711649,-1.17686 c -0.43877,0.33874 0.39171,1.74389 0,0 z m -117.129185,0.35809 c -0.894131,-1.07336 -1.251051,-0.73073 0,0 z m 115.009905,-8.41638 c -0.50933,0.11475 0.37904,1.15975 0,0 z m -0.27009,-2.13321 c -0.46307,0.26443 0.42943,1.45702 0,0 z m -0.24806,-3.43484 c -0.37792,0.73222 0.36731,3.48859 0,0 z m -123.950609,1.73826 c -1.457014,-0.42943 -0.264432,0.46307 0,0 z m 2.772613,-2.36587 c -1.047664,-0.55602 -0.247275,0.59617 0,0 z m 121.696146,-3.06476 c -0.50934,0.11475 0.37905,1.15977 0,0 z M 66.938365,100.99139 c -1.047667,-0.55602 -0.247275,0.59618 0,0 z M 181.23878,94.197946 c -0.3641,1.011084 0.36685,5.331739 0,0 z M 68.668703,95.686024 c -1.763247,-0.482625 -0.318206,0.480858 0,0 z m -0.005,-5.293345 c -1.457016,-0.429441 -0.264431,0.463085 0,0 z M 180.16785,89.459965 c -0.50933,0.114757 0.37905,1.159765 0,0 z m -0.26293,-2.000912 c -0.42558,0.393457 0.41175,2.049318 0,0 z M 68.778269,86.284965 c -0.509324,0.114749 0.379014,1.159762 0,0 z m 111.125001,-0.79375 c -0.50933,0.114757 0.37905,1.159765 0,0 z m 0.25907,-1.86862 c -0.46307,0.264432 0.42943,1.457014 0,0 z m 0.008,-1.450173 c -0.43879,0.338728 0.3917,1.743891 0,0 z m 0,-4.233334 c -0.43879,0.338728 0.3917,1.743891 0,0 z M 76.71025,73.568428 c -0.463082,0.264431 0.429439,1.457016 0,0 z m 2.541786,0.686346 c -1.763247,-0.482625 -0.318206,0.480858 0,0 z m 9.117579,-6.336303 c -1.047664,-0.555996 -0.247279,0.596209 0,0 z m 9.525,-4.233333 c -1.047663,-0.555997 -0.24728,0.596208 0,0 z m 8.604465,-1.073709 c -1.45701,-0.429441 -0.26443,0.463085 0,0 z m 4.23837,-1.056655 c -1.76324,-0.482625 -0.3182,0.480858 0,0 z m 3.66674,-0.554054 c 0.80154,-1.230669 -1.45999,1.603438 0,0 z m 54.91023,-4.101042 c -0.46307,0.264432 0.42943,1.457016 0,0 z m -0.25309,-2.645833 c -0.40523,0.516321 0.39792,2.639608 0,0 z M 147.6241,53.476632 c -0.50932,0.114749 0.37901,1.159766 0,0 z m -28.57501,-0.529167 c -0.50932,0.114747 0.37902,1.159762 0,0 z m 33.87769,-3.186798 c -0.37792,0.732219 0.36731,3.488596 0,0 z m -21.21913,-4.649994 c -1.15086,0.314274 -0.51147,0.748794 0,0 z m 39.45885,-0.646411 c -0.46307,0.264432 0.42943,1.457014 0,0 z m -15.86949,-3.158464 c -0.50933,0.114758 0.37905,1.159764 0,0 z m -0.26458,-1.5875 c -0.50932,0.11475 0.37901,1.159765 0,0 z m 17.84468,-1.471745 c 0.80153,-1.230669 -1.45998,1.603438 0,0 z m -17.32102,-3.836458 c -0.46311,0.264428 0.42946,1.457013 0,0 z m 19.05,-3.175 c -0.46311,0.264428 0.42946,1.457013 0,0 z m -0.7578,-5.65631 c -0.34172,-1.885778 -0.17718,3.258105 0,0 z m -18.75778,-3.651919 c -1.13547,0.922938 -0.74636,1.441392 0,0 z m 17.40442,-4.698151 c -0.50932,0.114748 0.37901,1.159766 0,0 z m 0,-1.058333 c -0.50932,0.114748 0.37901,1.159764 0,0 z m -0.3714,-1.019219 c -0.7602,-1.561356 0.33546,1.822401 0,0 z m 0.10943,-1.770407 c -0.43877,0.338744 0.39171,1.743887 0,0 z m -0.79636,-2.766624 c -0.50932,0.114748 0.37901,1.159764 0,0 z M 161.37482,-2.7075279 c 2.53478,-0.3225643 -4.2181,0.3767483 0,0 z M 147.04648,258.04917 c 0.65254,-0.94251 0.31999,0.96735 0,0 z m 9.39271,-6.0698 c 1.26177,-2.62658 2.01577,2.16176 0,0 z m 0.79375,-1.5502 c 1.28041,-3.37549 2.16148,1.96235 0,0 z m 1.05833,-0.18521 c -0.62801,-1.38825 -0.22894,1.39756 0,0 z m 0.64159,-1.57246 c 0.4135,-3.91022 2.08228,2.44276 0,0 z m -10.03429,-4.90983 c 0.31997,-0.96735 0.65254,0.94251 0,0 z M 58.093634,194.63915 c 1.878393,-4.2679 3.409183,1.51445 0,0 z M 163.20665,-5.3557192 c 0.25037,-3.6895274 2.4773,2.6033149 0,0 z" />
                    <circle className={`ajaccio-mark`}
                    style={{fill:"#edc041", fillOpacity:1, stroke:"none", strokeWidth:"4", strokeLinecap:"round", strokeDashoffset:"113.386"}}
                    id="path842"
                    cx="79.240952"
                    cy="185.31342"
                    r="3" />
                    <text className={`ajaccio-text`}
                    style={{fontStyle:"normal", fontWeight:"normal", fontSize:"10.5833px", lineHeight:1.25, fill:"#000000", fillOpacity:1, stroke:"none", strokeWidth:0.264583}}
                    x="34.059364"
                    y="199.70728"
                    id="text878"><tspan
                        id="tspan876"
                        x="34.059364"
                        y="199.70728"
                        style={{fontStyle:"normal", fontWeight:"normal", fontVariant:"normal", fontStretch:"normal", fontFamily:"Kiona", strokeWidth:0.264583}}>Ajaccio</tspan></text>
                </g>
        </svg>
    );
}

export default Map;