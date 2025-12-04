package lida.javaBegginer.order_app.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lida.javaBegginer.order_app.constant.Countries;
import lombok.Data;

@Data
public class CustomerDTO {

    @JsonProperty("_id")
    private Long id;

    private String firstName;

    private String lastName;

    private String email;

    private String phoneNumber;

    private String street;

    private String city;

    private String zipCode;

    private Countries country;

}
