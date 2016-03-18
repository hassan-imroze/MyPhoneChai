using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Phonechai.Model;
using Phonechai.Service;
using Phonechai.ViewModel;

namespace Phonechai.WebApp.Controllers
{
    public class PhoneQueryController : BaseController
    {
        PhoneService service;
        public PhoneQueryController()
        {
            service = new PhoneService(db);
        }
        public IHttpActionResult Get()
        {
            List<PhoneViewModel> models = service.GetAll();
            return Ok(models);
        }

        public IHttpActionResult Get(string id)
        {
            PhoneViewModel viewModel = service.GetDetail(id);
            return Ok(viewModel);
        }
    }
}
