package com.image_store.imagestore;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.MediaType;
import org.springframework.util.StreamUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import javax.imageio.stream.ImageOutputStreamImpl;
import javax.print.attribute.standard.Media;
import javax.servlet.http.HttpServletResponse;
import java.awt.*;
import java.io.File;
import java.io.IOException;

@RestController
public class Image_Controller {

    @RequestMapping(value = "/get_image", method = RequestMethod.GET, produces = MediaType.IMAGE_JPEG_VALUE)
    public void getImage(HttpServletResponse response) throws IOException {
        var imgFile = new ClassPathResource("image/sid.jpg");
        response.setContentType(MediaType.IMAGE_JPEG_VALUE);
        StreamUtils.copy(imgFile.getInputStream(), response.getOutputStream());
    }

    @RequestMapping(value = "/upload_image", method = RequestMethod.POST, produces = MediaType.MULTIPART_FORM_DATA_VALUE)
    public void postImage(@RequestParam("file") MultipartFile file) throws IOException{
        File convertFile = new File("/var/tmp" + file.getOriginalFilename());

    }
}
