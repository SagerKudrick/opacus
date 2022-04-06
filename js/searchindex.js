Search.setIndex({docnames:["accounting/accounting","accounting/gdp","accounting/iaccountant","accounting/rdp","accounting/utils","batch_memory_manager","compute_dp_sgd_privacy","data_loader","distributed","dp_multihead_attention","dp_rnn","grad_sample_module","index","layers","noise_scheduler","optim/dp_ddp_optimizer","optim/dp_ddp_per_layer_optimizer","optim/dp_optimizer","optim/dp_per_layer_optimizer","optim/optimizers","privacy_engine","scripts","utils/module_utils","utils/packed_sequences","utils/tensor_utils","utils/uniform_sampler","utils/utils","validator"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":5,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.intersphinx":1,"sphinx.ext.todo":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["accounting/accounting.rst","accounting/gdp.rst","accounting/iaccountant.rst","accounting/rdp.rst","accounting/utils.rst","batch_memory_manager.rst","compute_dp_sgd_privacy.rst","data_loader.rst","distributed.rst","dp_multihead_attention.rst","dp_rnn.rst","grad_sample_module.rst","index.rst","layers.rst","noise_scheduler.rst","optim/dp_ddp_optimizer.rst","optim/dp_ddp_per_layer_optimizer.rst","optim/dp_optimizer.rst","optim/dp_per_layer_optimizer.rst","optim/optimizers.rst","privacy_engine.rst","scripts.rst","utils/module_utils.rst","utils/packed_sequences.rst","utils/tensor_utils.rst","utils/uniform_sampler.rst","utils/utils.rst","validator.rst"],objects:{"opacus.accountants":[[2,0,0,"-","accountant"],[1,0,0,"-","gdp"],[3,0,0,"-","rdp"],[4,0,0,"-","utils"]],"opacus.accountants.accountant":[[2,1,1,"","IAccountant"]],"opacus.accountants.accountant.IAccountant":[[2,2,1,"","get_epsilon"],[2,2,1,"","get_optimizer_hook_fn"],[2,2,1,"","mechanism"],[2,2,1,"","step"]],"opacus.accountants.gdp":[[1,1,1,"","GaussianAccountant"]],"opacus.accountants.gdp.GaussianAccountant":[[1,2,1,"","get_epsilon"],[1,2,1,"","mechanism"],[1,2,1,"","step"]],"opacus.accountants.rdp":[[3,1,1,"","RDPAccountant"]],"opacus.accountants.rdp.RDPAccountant":[[3,2,1,"","get_epsilon"],[3,2,1,"","mechanism"],[3,2,1,"","step"]],"opacus.accountants.utils":[[4,3,1,"","get_noise_multiplier"]],"opacus.data_loader":[[7,1,1,"","DPDataLoader"],[7,3,1,"","shape_safe"],[7,3,1,"","switch_generator"],[7,3,1,"","wrap_collate_with_empty"]],"opacus.data_loader.DPDataLoader":[[7,2,1,"","from_data_loader"]],"opacus.distributed":[[8,1,1,"","DifferentiallyPrivateDistributedDataParallel"],[8,3,1,"","average_gradients"]],"opacus.distributed.DifferentiallyPrivateDistributedDataParallel":[[8,2,1,"","forward"]],"opacus.grad_sample":[[11,0,0,"-","grad_sample_module"]],"opacus.grad_sample.grad_sample_module":[[11,1,1,"","GradSampleModule"],[11,3,1,"","create_or_accumulate_grad_sample"]],"opacus.grad_sample.grad_sample_module.GradSampleModule":[[11,2,1,"","add_hooks"],[11,2,1,"","capture_backprops_hook"],[11,2,1,"","del_grad_sample"],[11,2,1,"","disable_hooks"],[11,2,1,"","enable_hooks"],[11,2,1,"","forward"],[11,2,1,"","is_supported"],[11,2,1,"","rearrange_grad_samples"],[11,2,1,"","remove_hooks"],[11,2,1,"","set_grad_sample_to_none"],[11,2,1,"","to_standard_module"],[11,2,1,"","validate"],[11,2,1,"","zero_grad"]],"opacus.layers":[[9,0,0,"-","dp_multihead_attention"],[10,0,0,"-","dp_rnn"]],"opacus.layers.dp_multihead_attention":[[9,1,1,"","DPMultiheadAttention"],[9,1,1,"","SequenceBias"]],"opacus.layers.dp_multihead_attention.DPMultiheadAttention":[[9,2,1,"","forward"],[9,2,1,"","load_state_dict"]],"opacus.layers.dp_multihead_attention.SequenceBias":[[9,4,1,"","bias"],[9,2,1,"","forward"]],"opacus.layers.dp_rnn":[[10,1,1,"","DPGRU"],[10,1,1,"","DPGRUCell"],[10,1,1,"","DPLSTM"],[10,1,1,"","DPLSTMCell"],[10,1,1,"","DPRNN"],[10,1,1,"","DPRNNBase"],[10,1,1,"","DPRNNCell"],[10,1,1,"","DPRNNCellBase"],[10,1,1,"","RNNLinear"],[10,3,1,"","apply_permutation"]],"opacus.layers.dp_rnn.DPGRUCell":[[10,2,1,"","forward"]],"opacus.layers.dp_rnn.DPLSTMCell":[[10,2,1,"","forward"]],"opacus.layers.dp_rnn.DPRNNBase":[[10,2,1,"","forward"],[10,2,1,"","forward_layer"],[10,2,1,"","iterate_layers"]],"opacus.layers.dp_rnn.DPRNNCell":[[10,2,1,"","forward"]],"opacus.optimizers":[[16,0,0,"-","ddp_perlayeroptimizer"],[15,0,0,"-","ddpoptimizer"],[17,0,0,"-","optimizer"],[18,0,0,"-","perlayeroptimizer"]],"opacus.optimizers.ddp_perlayeroptimizer":[[16,1,1,"","DistributedPerLayerOptimizer"]],"opacus.optimizers.ddp_perlayeroptimizer.DistributedPerLayerOptimizer":[[16,5,1,"","accumulated_iterations"],[16,2,1,"","add_noise"],[16,2,1,"","clip_and_accumulate"],[16,2,1,"","pre_step"]],"opacus.optimizers.ddpoptimizer":[[15,1,1,"","DistributedDPOptimizer"]],"opacus.optimizers.ddpoptimizer.DistributedDPOptimizer":[[15,2,1,"","add_noise"],[15,2,1,"","step"]],"opacus.optimizers.optimizer":[[17,1,1,"","DPOptimizer"]],"opacus.optimizers.optimizer.DPOptimizer":[[17,5,1,"","accumulated_iterations"],[17,2,1,"","add_noise"],[17,2,1,"","attach_step_hook"],[17,2,1,"","clip_and_accumulate"],[17,5,1,"","grad_samples"],[17,2,1,"","load_state_dict"],[17,5,1,"","params"],[17,2,1,"","pre_step"],[17,2,1,"","scale_grad"],[17,2,1,"","signal_skip_step"],[17,2,1,"","state_dict"],[17,2,1,"","step"],[17,2,1,"","zero_grad"]],"opacus.optimizers.perlayeroptimizer":[[18,1,1,"","DPPerLayerOptimizer"]],"opacus.optimizers.perlayeroptimizer.DPPerLayerOptimizer":[[18,2,1,"","clip_and_accumulate"]],"opacus.privacy_engine":[[20,1,1,"","PrivacyEngine"]],"opacus.privacy_engine.PrivacyEngine":[[20,2,1,"","get_compatible_module"],[20,2,1,"","get_epsilon"],[20,2,1,"","is_compatible"],[20,2,1,"","make_private"],[20,2,1,"","make_private_with_epsilon"],[20,2,1,"","validate"]],"opacus.scheduler":[[14,1,1,"","ExponentialNoise"],[14,1,1,"","LambdaNoise"],[14,1,1,"","StepNoise"]],"opacus.scripts":[[6,0,0,"-","compute_dp_sgd_privacy"]],"opacus.scripts.compute_dp_sgd_privacy":[[6,3,1,"","compute_dp_sgd_privacy"]],"opacus.utils":[[5,0,0,"-","batch_memory_manager"],[22,0,0,"-","module_utils"],[23,0,0,"-","packed_sequences"],[24,0,0,"-","tensor_utils"],[25,0,0,"-","uniform_sampler"]],"opacus.utils.batch_memory_manager":[[5,1,1,"","BatchMemoryManager"],[5,1,1,"","BatchSplittingSampler"],[5,3,1,"","wrap_data_loader"]],"opacus.utils.module_utils":[[22,3,1,"","are_state_dict_equal"],[22,3,1,"","clone_module"],[22,3,1,"","get_submodule"],[22,3,1,"","parametrized_modules"],[22,3,1,"","requires_grad"],[22,3,1,"","trainable_modules"]],"opacus.utils.packed_sequences":[[23,3,1,"","compute_seq_lengths"]],"opacus.utils.tensor_utils":[[24,3,1,"","calc_sample_norms"],[24,3,1,"","calc_sample_norms_one_layer"],[24,3,1,"","filter_dilated_rows"],[24,3,1,"","sum_over_all_but_batch_and_last_n"],[24,3,1,"","unfold2d"],[24,3,1,"","unfold3d"]],"opacus.utils.uniform_sampler":[[25,1,1,"","DistributedUniformWithReplacementSampler"],[25,1,1,"","UniformWithReplacementSampler"]],"opacus.utils.uniform_sampler.DistributedUniformWithReplacementSampler":[[25,2,1,"","set_epoch"]],"opacus.validators":[[27,0,0,"-","module_validator"],[27,0,0,"-","utils"]],"opacus.validators.module_validator":[[27,1,1,"","ModuleValidator"]],"opacus.validators.module_validator.ModuleValidator":[[27,2,1,"","fix"],[27,2,1,"","fix_and_validate"],[27,2,1,"","is_valid"],[27,2,1,"","validate"]],"opacus.validators.utils":[[27,3,1,"","register_module_fixer"],[27,3,1,"","register_module_validator"]],opacus:[[7,0,0,"-","data_loader"],[8,0,0,"-","distributed"],[20,0,0,"-","privacy_engine"],[14,0,0,"-","scheduler"]]},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","function","Python function"],"4":["py","attribute","Python attribute"],"5":["py","property","Python property"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:function","4":"py:attribute","5":"py:property"},terms:{"0":[4,6,7,9,10,17,20,24,25],"01":[4,6],"05":[6,20],"0th":24,"1":[6,9,10,11,14,16,17,20,22,24],"10":6,"100":6,"120":24,"16":9,"1e":6,"2":[5,6,7,10,11,17,24],"20":[6,9],"21":9,"25723":11,"3":[6,10,17,24],"300":6,"32":24,"361851298":10,"39":6,"4":[5,7,9,10,17,24],"4930":10,"4d":24,"5":[6,7,10,17,24],"5d":24,"6":24,"64":7,"7":24,"8":22,"9":22,"abstract":[2,10],"boolean":27,"case":[11,27],"class":[1,2,3,5,7,8,9,10,11,14,15,16,17,18,20,25,27],"default":[7,10,14,25],"do":[10,11,17],"export":10,"final":10,"float":[1,2,3,4,6,7,14,15,16,17,18,20,25],"function":[2,6,7,8,9,10,11,14,15,17,20,22,23,24,27],"int":[3,4,5,6,7,9,10,14,15,16,17,18,24,25],"long":10,"new":[5,7,20],"return":[1,2,3,4,5,6,7,8,10,11,15,16,17,20,22,23,24,25,27],"short":10,"switch":7,"throw":[11,22],"true":[1,6,7,9,10,11,15,16,17,18,20,24,25],"while":[5,8,9,10,11,20,22],A:[6,10,14,15,16,17,24],As:[7,11],By:7,For:[5,8,9,11,20,24],If:[5,6,10,11,17,20,22],In:[16,17,25],It:[17,23,24,27],Its:17,On:[5,17],The:[4,6,10,11,14,16,17,20,22,24,25,27],To:6,Will:11,_current_grad_sampl:11,_forward_input:11,_generate_nois:[15,16,17,18,20],_init_private_train:5,abandon:22,abov:17,accord:[5,25],accordignli:5,account:[1,2,3,4,6,12,16,17,20],accumul:[10,11,16,17],accumulated_iter:[16,17],across:25,act:20,action:[16,17,24],activ:11,actual:[5,15,16,17,18],ad:[6,11,17,20,24],add:[9,11,15,16,17,20],add_bias_kv:9,add_hook:11,add_nois:[15,16,17],add_zero_attn:9,addit:[10,17,20],affect:[11,17],after:[10,17,20],afterward:[8,9,10,11],against:5,aggreg:[11,15,16,17,18,20,24],all:[7,8,9,10,11,17,20,22,24,25,27],allow:[5,9],along:10,alpha:[3,6],alreadi:11,also:[17,20,22,27],although:[8,9,10,11],alwai:[7,10,11,17,22,27],among:25,an:[6,7,10,11,14,17,22,24,27],analysi:6,anh:10,ani:[7,11,17,20,22],anoth:7,api:20,appli:[6,10,17,22,25],apply_permut:10,approach:[15,16,17,18],approxim:20,ar:[11,16,17,20,22,27],arang:24,arbitrari:27,are_state_dict_equ:22,arg:[2,8,10,11],argument:[7,10,11,17,20,27],arithmet:[15,16,17,18,20],around:20,aspect:7,assert:5,associ:11,assum:[5,17,24],assumpt:20,attach:[2,17],attach_step_hook:17,attack:[15,16,17,18,20],attn_mask:9,attribut:[7,10,11,17],attributeerror:22,autograd:11,avail:11,averag:[7,8,11,15,16,17,18],average_gradi:8,b:[10,24],backprop:11,backward:[5,10,11,16,17],base:[6,7,8,9,10,11,20],basi:11,batch:[1,6,7,9,10,11,12,15,16,17,18,20,23,24,25],batch_first:[9,10,11,20],batch_memory_manag:5,batch_sampl:[5,7],batch_siz:[4,5,7,10,11,15,16,17,18,20,23],batch_size_t:10,batchmemorymanag:[5,17],batchnorm:11,batchsplittingsampl:5,becaus:[11,17],becom:7,been:20,befor:[16,17],behav:[5,11,17,20],behaviour:[5,7,11,17],being:[10,24],belong:[11,17],best:11,between:[3,7,16,17,24,25],bi:10,bia:[9,10],bidirect:10,binari:4,blob:6,block:[9,24],bool:[1,6,7,10,11,15,16,17,18,20,22,24,25,27],both:[5,8,9,10,24],brand:20,budget:[1,2,3,4,6,20],bug:11,build:9,bytesio:22,c:24,c_0:10,c_last:10,c_n:10,c_t:10,calc_sample_norm:24,calc_sample_norms_one_lay:24,calcul:[7,9,11,16,17,20,24],calibr:17,call:[6,8,9,10,11,16,17],callabl:[2,7,14,15,16,17],callback:2,can:[2,5,6,7,10,11,15,16,17,18,20,22],captur:11,capture_backprops_hook:11,care:[8,9,10,11],cell:10,cell_param:10,certain:[5,7,20],chang:5,check:[5,11,17,20,22,27],chunk:[5,25],classmethod:[1,2,3,7,11,20,27],clear:[5,11,17],clip:[5,15,16,17,18,20],clip_and_accumul:[16,17,18],clone:22,clone_modul:22,close:20,closur:[15,16,17],code:[5,6],collat:7,collate_fn:7,com:[6,10,11],combin:20,command:6,commonli:17,compar:22,compat:[15,16,20,27],complic:11,compon:20,compris:5,comput:[4,8,9,10,11,12,14,20,21,23],compute_dp_sgd_privaci:6,compute_seq_length:23,concaten:10,concept:11,construct:[11,20],consumpt:5,contain:[10,17,23,24],content:17,context:5,continu:20,contrast:9,convers:3,coordin:5,copi:[20,22],correspond:[10,11,20],could:11,counterpart:20,creat:[7,11,23,24],create_or_accumulate_grad_sampl:11,criterion:5,crossentropyloss:5,cryptograph:[7,20],cudnn:10,current:[1,2,3,5,9,11,16,17,20],custom:27,d:[5,10,24],d_out:24,data:[5,8,10,11,12,15,16,20],data_load:[5,7,20],dataload:[5,7,20],dataset:[6,7,20,25],ddp:7,ddp_perlayeroptim:16,ddpoptim:15,decai:14,decor:27,deep:20,deepcopi:22,def:27,defin:[7,8,9,10,11],definit:24,del_grad_sampl:11,delet:11,delta:[1,2,3,4,6,20],demo_dataload:20,denomin:[15,16,17,18],depend:[11,27],descript:10,detail:[15,16,17,18,20,22,24],detect:11,determin:10,deviat:[6,20],dict:[17,22],differ:[11,17,25],differenti:[6,20],differentiallyprivatedistributeddataparallel:8,dilat:24,dilated_kernel_s:24,dim:[10,11,24],dimens:[9,10,11,20,24],dir:10,direct:10,disabl:11,disable_hook:11,discrep:22,distibur:16,distribut:[7,12,15,20,25],distributeddpoptim:[12,19],distributedperlayeroptim:[12,19],distributeduniformwithreplacementsampl:[7,25],divid:[17,25],do_skip:17,doc:22,document:[10,20],doe:[7,11,17,20],doesn:[5,10,11,20,22],don:11,done:[16,17],dp:[3,9,10,12,20,21,27],dp_data_load:7,dp_multihead_attent:9,dp_optimz:17,dp_rnn:10,dpdataload:7,dpgru:10,dpgrucel:10,dplstm:10,dplstmcell:10,dpmultiheadattent:[12,13],dpoptim:[2,5,12,14,15,16,18,19,20],dpoptimz:17,dpperlayeroptim:[12,19],dprnn:[12,13],dprnnbase:10,dprnncell:10,dprnncellbas:10,draw:25,drop:10,drop_last:7,dropout:[9,10],dure:[5,11,20,24],e:[7,9,10,11],each:[6,7,10,11,17,24,25],easier:22,effort:11,either:11,element:[7,9,10,25],elimin:11,elman:10,els:10,embed:9,embed_dim:9,emit:5,empti:[7,11,17],enabl:[6,7,11,20,25],enable_hook:11,encapsul:[20,27],end:[4,5,9,11],engin:[9,12],enhanc:7,ensur:[4,25],enter:6,entir:[11,20],entri:[17,20],environ:7,epd:3,epoch:[4,6,14,20,25],epsilon:[1,2,3,4,6,20],epsilon_toler:4,equal:[10,25],equival:[7,20,24],error:[11,20,22,27],estim:[4,6],everi:[5,8,9,10,11,14,17,20,27],exact:7,exactli:11,examin:22,exampl:[5,6,7,9,10,17,20,24],except:[7,10,11,16,17,24],exclud:24,excpet:27,execut:17,exist:[7,11,22,27],expect:[7,11,17,20,25],expected_batch_s:[15,16,17,18],expend:[1,2,3,20],expest:2,explicitli:11,exponentialnois:14,expos:20,ext:10,extend:11,extra:[11,24],extract:24,factor:14,fail:7,failur:27,fals:[1,7,9,10,11,15,16,17,18,20,22,27],far:[1,2,3,20],favour:22,featur:10,field:[11,15,17],filter_dilated_row:24,find:6,first:[7,11,20,24,27],fit:20,fix:[20,27],fix_and_valid:27,fixer:27,flag:[11,17,20,22,24,25,27],flat:[17,20,24],fn:17,follow:25,foo:17,footprint:17,form:25,former:[8,9,10,11],forward:[8,9,10,11,16,17],forward_lay:10,forward_output:11,found:[11,20],friendli:[9,10],from:[6,7,9,10,11,15,16,17,18,22,24,25],from_data_load:7,full:[9,10,11,20],fulli:11,g:[10,11],gain:20,gamma:14,gate:10,gaussian:[6,17,20,25],gaussianaccount:[0,12,20],gdp:[1,20],gener:[7,15,16,17,18,20,22,24,25],get:10,get_compatible_modul:20,get_epsilon:[1,2,3,20],get_noise_multipli:4,get_optimizer_hook_fn:2,get_submodul:22,getter:7,github:[6,10,11],given:[4,7,8,11,14,17,20,22,24,25],global:11,good:20,googl:6,grad:[5,10,11,15,16,17,18,22],grad_sampl:[5,10,11,17],grad_sample_modul:11,gradient:[5,8,9,11,15,16,17,18,20,22],gradsamplemodul:[12,17,20],graph:11,greater:6,group:17,gru:10,grucel:10,guarante:20,h:[10,24],h_0:10,h_last:10,h_n:10,h_out:24,h_t:10,ha:[5,9,10,11,20],handi:22,handl:7,happili:7,hard:5,have:[9,11,17,22],help:27,helper:24,here:[10,22],hi:10,hidden:10,hidden_s:10,high:17,higher:20,highlight:22,hold:[17,27],hook:[8,9,10,11,17],how:[11,20],howev:11,html:[9,22],http:[6,9,10,11,22],hx:10,i:[7,11],iaccount:[0,12],ie:22,ignor:[8,9,10,11,15,16,17,18,24],imag:24,implement:[7,8,9,10,16,18,22,24],implicit:24,in_featur:10,includ:[7,22],incom:10,incompat:20,incompatobl:27,independ:25,index:[5,12,14],indic:[5,11,15,16,17,18,20,22,25,27],individu:[11,20],infer:[10,15,16,17,18],inherit:7,init:5,initi:[5,8,9,10,14],input:[1,5,6,7,9,10,11,20,24],input_s:10,insid:27,instal:[11,20],instanc:[5,7,8,9,10,11],instanti:7,instead:[8,9,10,11,17,20],integ:14,intern:[8,9,10],invalid:[11,20],invok:27,is_compat:20,is_pack:10,is_support:11,is_valid:27,issu:[10,11],issuecom:10,item:25,iter:[6,10,22,24,25],iterabledataset:7,iterate_lay:10,its:[11,25],just:[5,20,22],k:[11,20],kdim:9,keep:24,kei:9,kernel:24,kernel_s:24,key_padding_mask:9,keyword:27,know:11,kwarg:[2,4,8,11,20,27],l2:[6,20],l:[9,10,24],label:5,lambdanois:14,larg:[5,17],last:[5,10,14,17,24],last_epoch:14,latest:17,latter:[8,9,10,11],layer:[9,10,11,12,16,18,20,24],lead:7,learn:14,learnabl:9,least:11,leav:[5,20],len:5,length:[9,10,23,24,25],level:[4,8,17],leverag:9,librari:11,like:[10,11,17,20,24],limit:[5,10,17],line:[5,6],linear:10,list:[3,5,6,7,10,11,16,17,18,20,23,24,27],ll:7,load:[9,10,17],load_state_dict:[9,17],loader:[5,12,20],local:[24,25],log:22,logic:[5,27],look:[17,27],loss:[5,6,11,15,16,17,18,20],loss_reduct:[11,15,16,17,18,20],lr:[17,20],lstm:10,lstmcell:10,m:[6,9,11],made:[20,27],mai:27,main:20,mainli:6,make:[5,11,27],make_priv:20,make_private_with_epsilon:20,manag:[12,17],mani:[7,10],master:6,math:10,max:[5,15,16,17,18],max_batch_len:10,max_batch_s:[5,10],max_grad_norm:[15,16,17,18,20],max_physical_batch_s:5,maximum:[5,20],mean:[11,15,16,17,18,20],mechan:[1,2,3,4,6,7,20,25],memori:[10,12,17],method:[7,11,20,24],minu:25,mode:10,model:[5,6,8,10,11,15,16,17,20,22],modifi:[5,15,17,20],modul:[7,8,9,10,11,12,17,20,26,27],module_util:22,module_valid:27,modulevalid:[12,20],more:[5,11,20,22,24],most:[7,15,16,17],much:20,multi:10,multiheadattent:9,multipl:[11,14],multipli:[1,2,3,6,15,16,17,18],multiprocessing_context:7,must:[7,10,11],mycustommodel:[17,20,27],n:[7,9],n_data:4,n_dim:24,name:[1,2,3,24],named_param:24,namespac:27,nb2:7,nb:7,need:[5,7,8,9,10,11],need_weight:9,neg:11,network:10,never:[11,17],new_data_load:5,next:[6,7,17,25],nn:[5,8,9,10,11,17,22,23,24,27],nois:[1,2,3,4,6,12,15,16,17,18,20],noise_gener:20,noise_lambda:14,noise_multipli:[1,2,3,6,14,15,16,17,18,20],noise_se:20,non:[7,10,11,17,20],none:[2,3,4,7,8,9,10,11,15,16,17,18,20,24,25],nonlinear:10,norm:[15,16,17,18,20,24],normal:[5,11,17,20],notabl:20,note:[5,10,11,17,20],noth:[10,11,17],notifi:5,notimplementederror:11,now:20,np:24,num_chunk:10,num_direct:10,num_head:9,num_lay:10,num_replica:25,num_sampl:25,num_work:7,number:[4,6,7,16,17,20,24,25],object:[5,7,15,16,17,18,20,25],occasin:5,off:11,onc:22,one:[1,2,3,5,7,8,9,10,11,17,20,25],ones:24,onli:[5,10,11,17,24],opacu:[1,2,3,4,5,6,7,8,9,10,11,14,15,16,17,18,20,22,23,24,25,27],oper:[11,15,16,17,18,20],oppos:[20,22],opposit:11,optim:[1,2,3,5,6,12,14,15,16,17,18,20],optimz:5,option:[3,4,7,15,16,17,18,20],order:[3,6,25],org:[9,22],organ:22,origin:[7,9,10,20],other:[11,16,17,20],otherwis:[1,7,11,15,17,20,22,25],ouput:25,out:[11,17],out_featur:10,output:[5,7,9,10,24],over:[5,6,7,8,10,11,17,20,22,24],overal:24,overridden:[8,9,10,11],own:27,p:[5,10,11,15,16,17,18],pack:[12,26],packag:8,packed_padded_sequ:23,packed_sequ:23,packedsequ:[10,23],pad:24,page:12,pair:[6,10],parallel:[8,16],param:[2,11,17,24],param_group:17,paramet:[1,2,3,4,5,6,7,8,9,10,11,14,15,16,17,18,20,22,23,24,25,27],parametrized_modul:22,particular:25,pass:[5,7,8,9,10,11,16,17,20,27],pasta:22,per:[5,9,10,11,16,17,18,20],per_lay:20,perform:[6,8,9,10,11,15,16,17,18,20],period:14,perlayeroptim:18,permut:10,persistent_work:7,physic:5,physoc:5,pin_memori:7,pleas:9,plu:25,point:[15,16,17,18,20,24],poisson:[1,7,15,16,17,18,20,25],poisson_sampl:20,possibl:[7,11,16,17,20],pre_step:[16,17],precis:4,prefer:20,prefetch_factor:7,preserv:7,prevent:20,previous:9,print:[6,10],privaci:[1,2,3,4,12,16,17,21],privacy_engin:20,privacyengin:[5,20],privat:20,probabl:[6,7,25],proce:17,process:[7,11,15,16,17,24],produc:[5,7],product:24,proj_siz:10,properti:[16,17],provid:[7,20],pseudo:20,py:6,python:6,pytorch:[7,9,10,11,20,22],queri:9,queue:17,rais:[6,11,20,22,27],raise_if_error:11,rand:24,randint:7,randn:[7,9],random:[7,15,16,17,18,20,25],rate:[1,2,3,4,6,14,16,17],ratio:[6,20],rdp:[3,4,6,20],rdpaccount:[0,12,20],re:11,reach:4,read:22,real:[16,17],rearrang:11,rearrange_grad_sampl:11,reason:11,recip:[8,9,10,11],recommend:11,recurr:[10,11],recurs:22,reduct:[11,15,16,17,18,20],reevalu:[15,16,17],refer:[9,10],regist:[8,9,10,11,20,27],register_module_fix:27,register_module_valid:27,registri:27,regular:[11,17],relat:20,relu:10,remov:[11,22,24],remove_hook:11,replac:[5,10,20],replica:25,repres:[11,20,23],requir:[15,16,17,18,20,22,27],requires_grad:22,respons:20,responsibilit:20,result:[6,11,15,16,17,24],revers:10,reverse_lay:10,rng:20,rnn:[10,23],rnnbase:10,rnncell:10,rnnlinear:10,robust:[15,16,17,18],root:27,round:25,row:24,run:[4,8,9,10,11,20,27],running_seq_length:23,s:[4,6,10,11,17,20,22,23,24],safe:7,safeguard:5,same:[7,10,11,17,20,23,24,25,27],samp:2,sampl:[1,2,3,4,5,6,7,9,10,11,15,16,17,18,20,24,25],sample_empty_shap:7,sample_r:[1,2,3,4,6,7,25],sampler:[5,7,11,12,26],satisfi:6,save:[9,11],scale_grad:17,schedul:12,script:[6,12],scriptmodul:[8,9,10],sd1:22,sd2:22,search:[3,4,12],second:7,secur:[7,20],secure_mod:[15,16,17,18,20],see:[7,9,10,15,16,17,18,20,22,24],seed:[20,25],select:[6,7,25],self:[10,17],sensit:[6,20],seq_length:10,sequenc:[5,7,9,10,12,26],sequencebia:9,sequenti:10,serial:22,set:[5,7,11,14,17,20,24,25],set_epoch:25,set_grad_sample_to_non:11,set_to_non:[11,17],sgd:[12,17,20,21],shape:[7,9,10,11,17,24],shape_saf:7,share:[8,9,10],should:[8,9,10,11,15,17,22],shuffl:[20,25],shuffle_se:25,side:24,sigma:4,signal:[1,2,3,17],signal_skip_step:17,signatur:[17,27],silent:[8,9,10,11],simul:[5,17],sinc:[8,9,10,11],singl:[10,15,17,24],size:[5,6,7,9,10,15,16,17,18,23,24,25],skip:17,slice:24,slide:24,smaller:5,so:[1,2,3,7,9,11,17,20,22],some:[11,20],sourc:[1,2,3,4,5,6,7,8,9,10,11,14,15,16,17,18,20,22,23,24,25,27],space:24,spatial:24,specif:[2,10,16,17],specifi:[15,17,22],spent:20,split:[5,25],stabl:22,stai:7,standard:[6,10,11,20],stat:24,state:[8,9,10,17,20,22],state_dict:[9,17],state_init:10,std:17,step:[1,2,3,4,5,6,15,16,17],step_siz:14,stepnois:14,still:11,store:[10,11,15,16,17,18,23],str:[1,2,3,4,11,15,16,17,18,20,22,24],straightforward:11,strategi:[16,18],strict:[11,27],stride:24,string:[22,24],strong:20,sub:[5,22],sub_modul:27,subclass:[2,7,8,9,10,11,17],submodul:[11,20,22],success:11,sum:[5,11,15,16,17,18,20,24,25],sum_over_all_but_batch_and_last_n:24,summed_grad:[5,16,17,18],suppli:27,support:[7,9,10,11,20,22,24],switch_gener:7,t1:24,t2:24,t:[5,7,10,11,15,16,17,18,20,22],take:[8,9,10,11,15,16,17,18,20,27],tanh:10,target:[1,2,3,6,20,22],target_class_or_class:27,target_delta:[4,20],target_epsilon:[4,20],task:20,technic:20,tensor:[7,10,11,12,15,17,20,23,26],tensor_util:24,tensordataset:7,tensorflow:6,tensorflow_privaci:6,term:10,tf:6,than:[5,6,20],thei:[11,22],them:[5,7,8,9,10,11],therefor:17,thi:[5,6,7,8,9,10,11,15,17,20,22,24,25],those:22,threshold:17,through:10,thu:7,time:[11,14,27],timeout:7,timestep:10,to_standard_modul:11,torch:[7,8,9,10,11,15,16,17,18,20,22,23,24,25],torchcsprng:20,total:[4,25],total_s:25,touch:17,trace:11,track:[16,17],train:[5,6,10,20,27],trainabl:22,trainable_modul:22,transform:10,tupl:[6,7,10,11,20,24],turn:11,tutori:9,two:[7,16,17,22],type:[1,2,3,4,6,8,9,10,11,15,16,17,20,22,23,24,25,27],typevar:7,typic:[7,16,17],unchang:20,under:27,underli:[5,16,17],unfeas:20,unfold2d:24,unfold3d:24,unfold:24,uniform:[12,26],uniform_sampl:25,uniformwithreplacementsampl:[5,7,25],union:[3,10,20,24],unit:10,unless:[5,11,15,17],unsupport:11,unsupportederror:27,unsupportedmoduleerror:[20,27],updat:[15,17,20],us:[2,3,4,5,7,10,15,16,17,18,20,23,25],user:7,usual:[4,20],util:[0,5,7,12,23,25,27],valid:[11,20,27],validat:11,validator_class:27,validt:27,valu:[9,11,15,16,17,18,20],valueerror:6,vanilla:20,variabl:7,vdim:9,ve:5,verbos:6,version:20,via:[1,7],view:24,virtual:17,w:24,w_out:24,wa:[1,5,11,17],want:[5,11,20,22,27],we:[5,7,11,17],what_is_state_dict:9,when:[5,6,9,10,11,14,15,16,17,18,20,24,25],where:[9,10,11,17,24],whether:[10,11,25,27],which:[2,6,7,11,14,17,20,25,27],whose:22,why:11,within:[8,9,10,11],won:[5,17],word:[16,17],work:27,worker:[8,25],worker_init_fn:7,would:[7,16,17],wrap:[5,7,11,14,15,16,17,18,20],wrap_collate_with_empti:7,wrap_data_load:5,wrapper:[5,17,20,22],x:[7,9,10,24],xa:10,y:[7,10],yet:[16,17],yield:25,you:[5,6,7,11,20,27],your:[20,27],zero:[10,11,17,24],zero_grad:[5,11,17]},titles:["Privacy Accounting","GaussianAccountant","IAccountant","RDPAccountant","Utils","Batch Memory Manager","Compute DP-SGD Privacy","DP Data Loader","Distributed","DPMultiheadAttention","DPRNN","GradSampleModule","Opacus API Reference","DP Layers","Noise Scheduler","DistributedDPOptimizer","DistributedPerLayerOptimizer","DPOptimizer","DPPerLayerOptimizer","Optimizers","Privacy Engine","Scripts","Module Utils","Packed Sequences","Tensor Utils","Uniform Sampler","Utils","ModuleValidator"],titleterms:{account:0,api:12,batch:5,comput:6,data:7,distribut:8,distributeddpoptim:15,distributedperlayeroptim:16,dp:[6,7,13],dpmultiheadattent:9,dpoptim:17,dpperlayeroptim:18,dprnn:10,engin:20,gaussianaccount:1,gradsamplemodul:11,iaccount:2,indic:12,layer:13,loader:7,manag:5,memori:5,modul:22,modulevalid:27,nois:14,opacu:12,optim:19,pack:23,privaci:[0,6,20],rdpaccount:3,refer:12,sampler:25,schedul:14,script:21,sequenc:23,sgd:6,tabl:12,tensor:24,uniform:25,util:[4,22,24,26]}})